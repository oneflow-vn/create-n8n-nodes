
const { N8NPropertiesBuilder } = require('@devlikeapro/n8n-openapi-node');

function buildNodeProperties (config) {
  const doc = config.openapi;
  const builderConfig = {};
  const parser = new N8NPropertiesBuilder(doc, builderConfig);
  const properties = parser.build();

  return properties;
}

module.exports = {
  buildNodeProperties
};