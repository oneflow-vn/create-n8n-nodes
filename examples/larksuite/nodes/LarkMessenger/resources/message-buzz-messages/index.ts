import { INodeProperties } from 'n8n-workflow'

import * as sendBuzzMessagesInApps from './send-buzz-messages-in-apps'
import * as sendBuzzTextMessages from './send-buzz-text-messages'
import * as sendPhoneCallBuzz from './send-phone-call-buzz'

export const name = 'Message  Buzz messages'

export const properties: INodeProperties[] = [
  ...sendBuzzMessagesInApps.properties,
  ...sendBuzzTextMessages.properties,
  ...sendPhoneCallBuzz.properties,
]
