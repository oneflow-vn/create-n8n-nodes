import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as code2SessionUsedInGadgetScenarios from './code-2-session-used-in-gadget-scenarios'

const operations: INodePropertyOptions[] = [
  code2SessionUsedInGadgetScenarios.option,
]

export const name = 'API Access Token'

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

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...code2SessionUsedInGadgetScenarios.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
