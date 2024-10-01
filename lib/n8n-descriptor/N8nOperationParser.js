const {
  DefaultOperationParser,
} = require('@devlikeapro/n8n-openapi-node');

const { normalizeName, normalizeDesc } = require('./utils');

class N8nOperationParser extends DefaultOperationParser {
  constructor (config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.tags = config.tags;

    this.normalizeFn =  typeof config.normalizeFn === 'function' ? config.normalizeFn : (x) => x;
  }

  name (operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId, this.normalizeFn);
  }

  value (operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId, this.normalizeFn);
  }

  action (operation, ctx) {
    const operationName = this.name(operation);
    const path =  ctx.path;
    const method = Object.keys(path)[0];
    const tags = ctx.path[method].tags;
    const tag = tags[0];
    const resourceName = normalizeName(tag, this.normalizeFn) || 'default';
    return `${operationName} ${resourceName}`;
  }

  description (operation) {
    const desc = operation.summary || operation.description;

    // remove ending dot
    return normalizeDesc(desc);
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
