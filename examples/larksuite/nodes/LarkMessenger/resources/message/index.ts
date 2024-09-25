import { INodeProperties } from 'n8n-workflow'

import * as sendMessages from './send-messages'
import * as readChatHistory from './read-chat-history'
import * as replyToMessages from './reply-to-messages'
import * as recallMessages from './recall-messages'
import * as obtainContentOfASpecificMessage from './obtain-content-of-a-specific-message'
import * as queriesTheReadStatusOfAMessage from './queries-the-read-status-of-a-message'
import * as obtainResourceFilesInMessages from './obtain-resource-files-in-messages'

export const name = 'Message'

export const properties: INodeProperties[] = [
  ...sendMessages.properties,
  ...readChatHistory.properties,
  ...replyToMessages.properties,
  ...recallMessages.properties,
  ...obtainContentOfASpecificMessage.properties,
  ...queriesTheReadStatusOfAMessage.properties,
  ...obtainResourceFilesInMessages.properties,
]
