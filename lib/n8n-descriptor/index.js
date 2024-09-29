const { N8NPropertiesBuilder } = require('@devlikeapro/n8n-openapi-node');
const _ = require('lodash');
const pino = require('pino');
const N8nOperationsCollector = require('./N8nOperationsCollector');
const N8NResourceParser = require('./N8NResourceParser');
const N8nOperationParser = require('./N8nOperationParser');
const N8nResourceCollector = require('./N8nResourceCollector');

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
  const resource = properties.find((property) => property.name === 'resource');

  if (resource.options.length === 1) {
    resource.type = 'hidden';
  }

  return properties;
}
function addingAdditionalProperties () {
  const additionalProperties = [
    {
      displayName: 'Options',
      name: 'options',
      type: 'collection',
      placeholder: 'Add option',
      default: {},
      options: [
        {
          displayName: 'Use Custom Body',
          name: 'useCustomBody',
          type: 'boolean',
          description: 'Wether to use a custom body',
          required: true,
          default: false,
        },
      ],
    },
  ];
  return additionalProperties;
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

function buildExtraOptions (config) {
  const extraOptions = addingAdditionalProperties(config);

  return extraOptions;
}

function findPropertiesByDisplayOptions (properties, value) {
  return properties.filter((property) => {
    const { displayOptions } = property;
    return (
      displayOptions &&
      displayOptions.show &&
      displayOptions.show.resource &&
      displayOptions.show.resource.includes(value)
    );
  });
}

function filterResourcesWithoutOperations (properties) {
  const resources = properties[0];
  resources.options = resources.options.filter((option) => {
    const { value } = option;
    const props = findPropertiesByDisplayOptions(properties, value);
    return props.length > 0;
  });

  return properties;
}

function findOverWritesOfProperties (config, property) {
  const overWrites = _.get(config, 'config.overwrites.operations');

  if (!overWrites) {
    return [];
  }

  return overWrites.filter((overWrite) => {
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

module.exports = {
  buildNodeProperties,
  buildExtraOptions,
};
