import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainCustomUserFieldsOfACompany from './obtain-custom-user-fields-of-a-company'

const operations: INodePropertyOptions[] = [
  obtainCustomUserFieldsOfACompany.option,
]

export const name = 'Custom User Fields'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts Custom User Fields'],
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
  ...obtainCustomUserFieldsOfACompany.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
