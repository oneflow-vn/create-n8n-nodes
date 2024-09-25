import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as queryTheWorkforceType from './query-the-workforce-type'
import * as addAWorkforceType from './add-a-workforce-type'
import * as updateTheWorkforceType from './update-the-workforce-type'
import * as deleteWorkforceTypes from './delete-workforce-types'

const operations: INodePropertyOptions[] = [
  queryTheWorkforceType.option,
  addAWorkforceType.option,
  updateTheWorkforceType.option,
  deleteWorkforceTypes.option,
]

export const name = 'Workforce Type'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts Workforce Type'],
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
  ...queryTheWorkforceType.properties,
  ...addAWorkforceType.properties,
  ...updateTheWorkforceType.properties,
  ...deleteWorkforceTypes.properties,
]
