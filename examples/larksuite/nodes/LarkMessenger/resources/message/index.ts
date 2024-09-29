import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as sendMessages from './send-messages'
import * as readChatHistory from './read-chat-history'
import * as replyToMessages from './reply-to-messages'
import * as recallMessages from './recall-messages'
import * as obtainContentOfASpecificMessage from './obtain-content-of-a-specific-message'
import * as queriesTheReadStatusOfAMessage from './queries-the-read-status-of-a-message'
import * as obtainResourceFilesInMessages from './obtain-resource-files-in-messages'

const operations: INodePropertyOptions[] = [
  sendMessages.option,
  readChatHistory.option,
  replyToMessages.option,
  recallMessages.option,
  obtainContentOfASpecificMessage.option,
  queriesTheReadStatusOfAMessage.option,
  obtainResourceFilesInMessages.option,
]

export const name = 'Message'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message'],
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
  ...sendMessages.properties,
  ...readChatHistory.properties,
  ...replyToMessages.properties,
  ...recallMessages.properties,
  ...obtainContentOfASpecificMessage.properties,
  ...queriesTheReadStatusOfAMessage.properties,
  ...obtainResourceFilesInMessages.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
