const {
  N8NPropertiesBuilder,
  DefaultOperationParser,
  DefaultResourceParser,
  ResourceCollector,
  OperationsCollector,
} = require('@devlikeapro/n8n-openapi-node');
const _ = require('lodash');
const pino = require('pino');
const toJsonSchema = require('to-json-schema');

function normalizeName (name) {
  // remove all special characters, keep only alphanumeric and spaces
  const n = name.replace(/[^a-zA-Z0-9 ]/g, '');
  return _.trim(n);
}

class N8nOperationParser extends DefaultOperationParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;
  }

  name (operation) {
    const { operationId, summary } = operation;
    return normalizeName(operationId || summary);
  }

  value (operation) {
    const { operationId, summary } = operation;
    return normalizeName(operationId || summary);
  }

  shouldSkip (operation) {
    // check for filtered operations
    if (this.isFiltered && !this.isOperationAllowed(operation)) {
      return true;
    }

    return super.shouldSkip(operation);
  }

  isOperationAllowed (operation) {
    const operationTags = operation.tags;
    for (const tag of this.tags) {
      for (const operationTag of operationTags) {
        // filter regex
        if (tag instanceof RegExp && tag.test(operationTag)) {
          return true;
        }
        // filter string
        if (tag === operationTag) {
          return true;
        }
      }
    }
    return false;
  }
}

class N8NResourceParser extends DefaultResourceParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;
  }

  name (resource) {
    const { name } = resource;

    if (name === 'default') {
      return this.config.defaultResource || this.config.nodeName;
    }

    const slugs = name.split('>');
    const lastSlug = slugs[slugs.length - 1];
    
    return normalizeName(lastSlug);
  }

  shouldSkip (resource) {
    if (this.isFiltered && !this.isResourceAllowed(resource)) {
      return true;
    }

    return false;
  }

  shouldSkipOperation (operation) {
    if (!this.isFiltered) {
      return false;
    }

    const tags = (operation.tags || []).map(tag => ({ name: tag }));

    for (const tag of tags) {
      if (this.isResourceAllowed(tag)) {
        return false;
      }
    }

    return true;
  }

  isResourceAllowed (resource) {
    const resourceTag = resource.name;
    for (const tag of this.tags) {
      // filter regex
      if (tag instanceof RegExp && tag.test(resourceTag)) {
        return true;
      }
      // filter string
      if (tag === resourceTag) {
        return true;
      }
    }
  }
}

class N8nResourceCollector extends ResourceCollector {
  visitTag (tag) {
    if (this.resourceParser.shouldSkip(tag)) {
      return;
    }
    super.visitTag(tag);
  }

  visitOperation (operation, context) {
    if (this.resourceParser.shouldSkipOperation(operation)) {
      return;
    }
    super.visitOperation(operation, context);
  }
}

function findPropertiesByDisplayOptions (properties, value) {
  return properties.filter(property => {
    const { displayOptions } = property;
    return displayOptions && displayOptions.show && displayOptions.show.resource && displayOptions.show.resource.includes(value);
  });
}

class N8nOperationsCollector extends OperationsCollector {

  getMultipleEnumValuesProps (context) {

    const properties = _.get(context, `path.${context.method}.requestBody.content['application/json'].schema.properties`);

    const propEntries = Object.entries(properties); 
    const enumProps = propEntries.filter(([_, prop]) => {
      // single enum value
      if (prop.enum && prop.enum.length > 1) {
        return true;
      }

      // multiple enum values
      if (prop.type === 'array' && prop.items.enum && prop.items.enum.length > 1) {
        return true;
      }

      return false;
    });

    return enumProps;
  }

  modifyEnumField (fields, [key, enumProp]) {
    const propertyIndex = fields.findIndex(field => field.name === key);

    if (propertyIndex === -1) {
      return fields;
    }

    if (enumProp.type === 'array') {
      fields[propertyIndex].type = 'multiOptions';
      fields[propertyIndex].options = enumProp.items.enum.map(value => ({ name: value, value }));
      fields[propertyIndex].default = [];
      console.log('field', fields[propertyIndex]);
    } else {
      fields[propertyIndex].type = 'options';
      fields[propertyIndex].options = enumProp.enum.map(value => ({ name: value, value }));
    }
    
    return fields;
  }

  modifyEnumFields (fields, enumProps) {
    for (const enumProp of enumProps) {
      fields = this.modifyEnumField(fields, enumProp);
    }

    return fields;
  }

  parseFields (operation, context) {
    let fields = super.parseFields(operation, context);
    const enumProps = this.getMultipleEnumValuesProps(context);
    
    if (enumProps.length > 0) {
      fields = this.modifyEnumFields(fields, enumProps);
    }

    if (operation.requestBody) {
      fields = this.parseFieldsFromRequestBody(operation, context);
    }

    return fields;
  }

  parseFieldsFromRequestBody (operation, context) {
    const { requestBody } = operation;
    const { content } = requestBody;

    if (content['application/json']) {
      const { schema } = content['application/json'];

      if (!schema) {
        return super.parseFields(operation, context);
      }

      return this.parseFieldsFromSchema(schema, operation, context);
    }

    if (content['*/*']) {
      const { schema } = content['*/*'];

      if (!schema) {
        return super.parseFields(operation, context);
      }

      return this.parseFieldsFromSchema(schema, operation, context);
    }

    return super.parseFields(operation, context);
  }

  parseFieldsFromSchema (schema, operation, context) {
    if (schema.type === 'object') {
      return this.parseFieldsFromObject(schema, operation, context);
    } else if (schema.type === 'string') {
      return this.parseFieldsFromString(schema, operation, context);
    }

    return super.parseFields(operation, context);
  }

  parseFieldsFromString (schema, operation, context) {
    const { example } = schema;

    // try to parse fields from example

    try {
      const parsedExample0 = JSON.parse(example);
      const parsedExample = typeof parsedExample0 === 'string' ? JSON.parse(parsedExample0) : parsedExample0;

      const mockOperation = _.cloneDeep(operation);
      mockOperation.requestBody.content['application/json'] = {
        example: parsedExample,
      };
      return this.parseFieldsFromExample(parsedExample, mockOperation, context);
    } catch (e) {
      console.log('error parsing example', e);
      // ignore
    }

    return super.parseFields(operation, context);
  }

  parseFieldsFromObject (schema, operation, context) {
    const { properties, example } = schema;

    if (!properties && !example) {
      return super.parseFields(operation, context);
    }

    // parse fields from example only if properties are not available
    if (!properties && example) {
      return this.parseFieldsFromExample(example, operation, context);
    }

    return super.parseFields(operation, context);
  }

  parseFieldsFromExample (example, operation, context) {
    const schema = toJsonSchema(example);

    const mockOperation = _.cloneDeep(operation);

    mockOperation.requestBody.content['application/json'].schema = schema;
    return super.parseFields(mockOperation, context);
  }
}

function filterResourcesWithoutOperations (properties) {
  const resources = properties[0];
  resources.options = resources.options.filter(option => {
    const { value } = option;
    const props = findPropertiesByDisplayOptions(properties, value);
    return props.length > 0;
  });

  return properties;
}

function findOverWritesOfProperties (config, property) {
  const overWrites = _.get(config, 'config.overwrites.operations');

  if (!overWrites) {
    return null;
  }

  return overWrites.filter(overWrite => {
    const { match, has } = overWrite;

    if (match) {
      return _.isMatch(property, match);
    }

    if (has) {
      return _.has(property, has);
    }

    return false;
  });
}

function overWriteProperties (properties, config) {
  const overWrittenProperties = [];

  for (const property of properties) {
    const overWrites = findOverWritesOfProperties(config, property);

    if (!overWrites || overWrites.length === 0) {
      overWrittenProperties.push(property);
      continue;
    }

    let newProperty = _.cloneDeep(property);
    let unset = false;

    for (const overWrite of overWrites) {
      const { set } = overWrite;

      if (set === false) {
        unset = true;
      } else if (typeof set === 'object') {
        newProperty = _.merge(newProperty, set);
      }
    }

    if (!unset) {
      overWrittenProperties.push(newProperty);
    }
  }

  return overWrittenProperties;
}

// hide the resource properties when having only one resource
function hideUnusedProperties (properties) {
  const resource = properties.find(property => property.name === 'resource');

  if (resource.options.length === 1) {
    resource.type = 'hidden';
  }

  return properties;
}

function buildNodeProperties (config) {
  const doc = config.openapi;
  const builderConfig = {
    logger: pino({
      enabled: false,
    }),
    OperationsCollector: N8nOperationsCollector,
    ResourcePropertiesCollector: N8nResourceCollector,
    operation: new N8nOperationParser(config),
    resource: new N8NResourceParser(config),
  };

  const parser = new N8NPropertiesBuilder(doc, builderConfig);
  const properties = parser.build();

  const filteredProperties = filterResourcesWithoutOperations(properties);

  const overWrittenProperties = overWriteProperties(filteredProperties, config);

  const hiddenUnusedProperties = hideUnusedProperties(overWrittenProperties);

  return hiddenUnusedProperties;
}

module.exports = {
  buildNodeProperties,
};
