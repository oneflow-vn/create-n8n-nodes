import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainCompanyInformation from './obtain-company-information'

const operations: INodePropertyOptions[] = [obtainCompanyInformation.option]

export const name = 'Tenant'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Company Information Tenant'],
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
  ...obtainCompanyInformation.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
