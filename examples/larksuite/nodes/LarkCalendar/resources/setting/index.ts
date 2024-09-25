import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as generateCalDavConfiguration from './generate-cal-dav-configuration'

const operations: INodePropertyOptions[] = [generateCalDavConfiguration.option]

export const name = 'Setting'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Setting'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...generateCalDavConfiguration.properties,
]
