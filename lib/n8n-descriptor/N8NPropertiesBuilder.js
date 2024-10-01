const { N8NPropertiesBuilder: BaseN8NPropertiesBuilder } = require('@devlikeapro/n8n-openapi-node');

class N8NPropertiesBuilder extends BaseN8NPropertiesBuilder {
  constructor (doc, config) {
    super(doc, config);
  }
  // supper class has a build method that is called in the build method below
  // build(overrides: Override[] = []): INodeProperties[] {
  //     const resourcePropertiesCollector = new this.ResourcePropertiesCollector(this.resourceParser)
  //     this.walker.walk(resourcePropertiesCollector)
  //     const resourceNode = resourcePropertiesCollector.resources

  //     const operationsCollector = new this.OperationsCollector(
  //         this.doc,
  //         this.operationParser,
  //         this.resourceParser,
  //         this.logger,
  //     )
  //     this.walker.walk(operationsCollector)
  //     const operations = operationsCollector.operations
  //     const fields = operationsCollector.fields

  //     const properties = [resourceNode, ...operations, ...fields]
  //     return this.update(properties, overrides)
  // }

  build () {
    return super.build();
  }
}

module.exports = N8NPropertiesBuilder;
