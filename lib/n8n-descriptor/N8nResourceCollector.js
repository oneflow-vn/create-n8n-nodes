const {
  ResourceCollector,
} = require('@devlikeapro/n8n-openapi-node');

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

module.exports = N8nResourceCollector;
