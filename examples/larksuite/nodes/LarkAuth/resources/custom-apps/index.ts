import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getAppaccesstoken from './get-appaccesstoken'
import * as getTenantaccesstoken from './get-tenantaccesstoken'

const operations: INodePropertyOptions[] = [
  getAppaccesstoken.option,
  getTenantaccesstoken.option,
]

export const name = 'Custom apps'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['API Access Token Custom Apps'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...getAppaccesstoken.properties,
  ...getTenantaccesstoken.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
