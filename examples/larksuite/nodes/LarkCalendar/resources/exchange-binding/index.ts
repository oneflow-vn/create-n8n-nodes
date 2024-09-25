import { INodeProperties } from 'n8n-workflow'

import * as connectAnExchangeAccount from './connect-an-exchange-account'
import * as queryTheConnectionStatus from './query-the-connection-status'
import * as disconnectAnExchangeAccount from './disconnect-an-exchange-account'

export const name = 'Exchange Binding'

export const properties: INodeProperties[] = [
  ...connectAnExchangeAccount.properties,
  ...queryTheConnectionStatus.properties,
  ...disconnectAnExchangeAccount.properties,
]
