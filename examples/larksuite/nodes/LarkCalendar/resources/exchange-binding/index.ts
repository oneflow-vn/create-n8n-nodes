import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as connectAnExchangeAccount from './connect-an-exchange-account'
import * as queryTheConnectionStatus from './query-the-connection-status'
import * as disconnectAnExchangeAccount from './disconnect-an-exchange-account'

const operations: INodePropertyOptions[] = [
  connectAnExchangeAccount.option,
  queryTheConnectionStatus.option,
  disconnectAnExchangeAccount.option,
]

export const name = 'Exchange Binding'

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

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...connectAnExchangeAccount.properties,
  ...queryTheConnectionStatus.properties,
  ...disconnectAnExchangeAccount.properties,
]
