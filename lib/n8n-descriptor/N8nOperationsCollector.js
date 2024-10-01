const { OperationsCollector } = require('@devlikeapro/n8n-openapi-node');
const _ = require('lodash');
const { modifyNodeProperties } = require('./n8n-properties');

class N8nOperationsCollector extends OperationsCollector {
  constructor (doc, operationParser, resourceParser, logger) {
    super(doc, operationParser, resourceParser, logger);
    this.n8nNodeProperties = modifyNodeProperties(this.n8nNodeProperties);
  }

  visitOperation (operation, context) {
    return super.visitOperation(operation, context);
  }

  parseOperation (operation, context) {
    const operationParsed = super.parseOperation(operation, context);

    return operationParsed;
  }

  extractExample (operation, context) {
    try {
      return this.n8nNodeProperties.extractBodyExample(
        operation.requestBody,
        context
      );
    } catch (error) {
      return {};
    }
  }

  parseFields (operation, context) {
    const fields = super.parseFields(operation, context);

    // Add fields for custom body
    const customBodyFields = [];
    if (operation.requestBody && operation.requestBody.content) {
      const examole = this.extractExample(operation, context);

      customBodyFields.push({
        displayName: 'Custom Body',
        name: 'customBody',
        type: 'json',
        default: JSON.stringify(examole, null, 2),
        description: 'Custom body to send',
        routing: {
          send: {
            preSend: ['${helpers.hooks.preSendActionCustonBody}'],
          },
        },
        displayOptions: {
          show: {
            '/options.useCustomBody': [true],
          },
        },
      });
    }

    fields.push(...customBodyFields);

    return fields;
  }

  addDisplayOption (fields, resource, operation) {
    fields.forEach((field) => {
      field.displayOptions = _.defaultsDeep(field.displayOptions , {
        show: {
          resource: [resource],
          operation: [operation],
        },
      });
    });
  }
}

module.exports = N8nOperationsCollector;
