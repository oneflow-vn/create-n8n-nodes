import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as search from './search'
import * as replace from './replace'

const operations: INodePropertyOptions[] = [search.option, replace.option]

export const name = 'Sheet  Data'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Sheet Data'],
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
  ...search.properties,
  ...replace.properties,
]
