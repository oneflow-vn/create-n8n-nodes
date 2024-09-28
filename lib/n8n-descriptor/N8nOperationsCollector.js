const {
  OperationsCollector,
} = require('@devlikeapro/n8n-openapi-node');
const { modifyNodeProperties } = require('./n8n-properties');

class N8nOperationsCollector extends OperationsCollector {
  constructor (doc, operationParser, resourceParser, logger) {
    super(doc, operationParser, resourceParser, logger);
    this.n8nNodeProperties = modifyNodeProperties(this.n8nNodeProperties);
  }

  parseFields (operation, context) {
    const fields = super.parseFields(operation, context);

    return fields;
  }
}

module.exports = N8nOperationsCollector;
