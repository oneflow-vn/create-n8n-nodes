const _ = require('lodash');
const {
  DefaultOperationParser,
} = require('@devlikeapro/n8n-openapi-node');

const { normalizeName, normalizeDesc } = require('./utils');

class N8nOperationParser extends DefaultOperationParser {
  constructor(config) {
    super();
    this.config = config;

    this.isFiltered = config.isFiltered;
    this.allowedTags = config.tags || [];
    this.allowedOperations = config.operations || [];

    this.normalizeFn = typeof config.normalizeFn === 'function' ? config.normalizeFn : (x) => x;
    this.normalizeActionFn = typeof config.normalizeActionFn === 'function' ? config.normalizeActionFn : (x) => x;
  }

  name(operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId, this.normalizeFn);
  }

  value(operation) {
    const { operationId, summary } = operation;
    return normalizeName(summary || operationId, this.normalizeFn);
  }

  action(operation, ctx) {
    const operationName = this.name(operation);
    const path = ctx.path;
    const method = Object.keys(path)[0];
    const tags = ctx.path[method].tags;
    const tag = tags[0];
    const resourceName = normalizeName(tag, this.normalizeFn) || 'default';
    return this.normalizeActionFn(`${operationName} ${resourceName}`, operationName, operation);
  }

  description(operation) {
    const desc = operation.description || operation.summary;

    // remove ending dot
    return normalizeDesc(desc);
  }

  shouldSkip(operation, context) {
    // check for filtered operations
    if (this.isFiltered && !this.isOperationAllowed(operation, context)) {
      return true;
    }

    return super.shouldSkip(operation);
  }

  isOperationAllowed(operation, context) {
    const operationTags = operation.tags;

    const shouldFilterByTag = this.allowedTags.length > 0;
    const shouldFilterByOperation = this.allowedOperations.length > 0;

    // default is allowed when no filters
    let isAllowed = !shouldFilterByTag && !shouldFilterByOperation;

    const identifier = context.pattern;

    // check if operation is allowed
    for (const allowedOperation of this.allowedOperations) {
      if (allowedOperation instanceof RegExp && allowedOperation.test(identifier)) {
        isAllowed = true;
      }

      if (typeof allowedOperation === 'object' && _.isMatch(operation, allowedOperation)) {
        isAllowed = true;
      }

      if (allowedOperation === identifier) {
        isAllowed = true;
      }
    }

    if (shouldFilterByOperation && !isAllowed) {
      return false;
    }

    // check if tag is allowed
    for (const tag of this.allowedTags) {
      for (const operationTag of operationTags) {
        // filter regex
        if (tag instanceof RegExp && tag.test(operationTag)) {
          isAllowed = true;
        }
        // filter string
        if (tag === operationTag) {
          isAllowed = true;
        }
      }
    }

    return isAllowed;
  }
}

module.exports = N8nOperationParser;
