const {
  DefaultOperationParser,
} = require('@devlikeapro/n8n-openapi-node');

const { normalizeName } = require('./utils');

class N8nOperationParser extends DefaultOperationParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;
  }

  name (operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId);
  }

  value (operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId);
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

module.exports = N8nOperationParser;
