import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getAppaccesstoken from './get-appaccesstoken'
import * as getTenantaccesstoken from './get-tenantaccesstoken'
import * as repushAppticket from './repush-appticket'

const operations: INodePropertyOptions[] = [
  getAppaccesstoken.option,
  getTenantaccesstoken.option,
  repushAppticket.option,
]

export const name = 'Store Apps'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['API Access Token Store Apps'],
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
  ...getAppaccesstoken.properties,
  ...getTenantaccesstoken.properties,
  ...repushAppticket.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
