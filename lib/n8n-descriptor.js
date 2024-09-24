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

class N8nOperationParser extends DefaultOperationParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;
  }

  name (operation) {
    const { operationId, summary } = operation;
    return _.trim(operationId || summary);
  }

  value (operation) {
    const { operationId, summary } = operation;
    return _.trim(operationId || summary);
  }

  shouldSkip (operation) {
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
    const slugs = name.split('>');
    const lastSlug = slugs[slugs.length - 1];

    return _.trim(lastSlug);
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
  parseFields (operation, context) {
    if (operation.requestBody) {
      return this.parseFieldsFromRequestBody(operation, context);
    }
    
    return super.parseFields(operation, context);
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

  return filteredProperties;
}

module.exports = {
  buildNodeProperties,
};
