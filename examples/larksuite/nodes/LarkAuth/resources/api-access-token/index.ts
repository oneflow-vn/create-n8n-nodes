import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as code2SessionusedInGadgetScenarios from './code-2-sessionused-in-gadget-scenarios'

const operations: INodePropertyOptions[] = [
  code2SessionusedInGadgetScenarios.option,
]

export const name = 'Api Access Token'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['API Access Token'],
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
  ...code2SessionusedInGadgetScenarios.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
