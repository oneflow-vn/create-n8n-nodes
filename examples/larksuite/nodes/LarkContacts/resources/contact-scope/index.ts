import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as obtainTheRangeOfContactsDataThatAnAppCanAccess from './obtain-the-range-of-contacts-data-that-an-app-can-access'

const operations: INodePropertyOptions[] = [
  obtainTheRangeOfContactsDataThatAnAppCanAccess.option,
]

export const name = 'Contact Scope'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts Contact Scope'],
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
  ...obtainTheRangeOfContactsDataThatAnAppCanAccess.properties,
]
