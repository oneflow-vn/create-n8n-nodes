import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as getAppInformation from './get-app-information'

const operations: INodePropertyOptions[] = [getAppInformation.option]

export const name = 'App'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Bitable App'],
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
  ...getAppInformation.properties,
]
