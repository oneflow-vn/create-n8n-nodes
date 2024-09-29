import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as connectAnExchangeAccount from './connect-an-exchange-account'
import * as queryTheConnectionStatus from './query-the-connection-status'
import * as disconnectAnExchangeAccount from './disconnect-an-exchange-account'

const operations: INodePropertyOptions[] = [
  connectAnExchangeAccount.option,
  queryTheConnectionStatus.option,
  disconnectAnExchangeAccount.option,
]

export const name = 'Exchange Binding'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Exchange Binding'],
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
  ...connectAnExchangeAccount.properties,
  ...queryTheConnectionStatus.properties,
  ...disconnectAnExchangeAccount.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
