import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as listView from './list-view'
import * as newView from './new-view'
import * as deleteView from './delete-view'

const operations: INodePropertyOptions[] = [
  listView.option,
  newView.option,
  deleteView.option,
]

export const name = 'View'

/* eslint-disable */
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
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...listView.properties,
  ...newView.properties,
  ...deleteView.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
