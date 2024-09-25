import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as listView from './list-view'
import * as newView from './new-view'
import * as deleteView from './delete-view'

const operations: INodePropertyOptions[] = [
  listView.option,
  newView.option,
  deleteView.option,
]

export const name = 'view'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Bitable View'],
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
  ...listView.properties,
  ...newView.properties,
  ...deleteView.properties,
]
