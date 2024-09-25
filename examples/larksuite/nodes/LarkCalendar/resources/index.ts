import { INodeProperties } from 'n8n-workflow'

import * as calendar from './calendar'
import * as acl from './acl'
import * as event from './event'
import * as eventAttendee from './event-attendee'
import * as eventAttendeeChatMember from './event-attendee-chat-member'
import * as freebusy from './freebusy'
import * as timeoff from './timeoff'
import * as setting from './setting'
import * as exchangeBinding from './exchange-binding'

export const properties: INodeProperties[] = [
  ...calendar.properties,
  ...acl.properties,
  ...event.properties,
  ...eventAttendee.properties,
  ...eventAttendeeChatMember.properties,
  ...freebusy.properties,
  ...timeoff.properties,
  ...setting.properties,
  ...exchangeBinding.properties,
]
