import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as sendBuzzMessagesInApps from './send-buzz-messages-in-apps'
import * as sendBuzzTextMessages from './send-buzz-text-messages'
import * as sendPhoneCallBuzz from './send-phone-call-buzz'

const operations: INodePropertyOptions[] = [
  sendBuzzMessagesInApps.option,
  sendBuzzTextMessages.option,
  sendPhoneCallBuzz.option,
]

export const name = 'Message  Buzz messages'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Message Buzz Messages'],
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
  ...sendBuzzMessagesInApps.properties,
  ...sendBuzzTextMessages.properties,
  ...sendPhoneCallBuzz.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
