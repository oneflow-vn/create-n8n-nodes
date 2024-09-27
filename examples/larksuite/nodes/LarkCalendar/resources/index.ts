import { INodeProperties } from 'n8n-workflow'
import { aggregateNodeMethods } from '../helpers/methods'
import runHooks from './hooks'

import * as calendar from './calendar'
import * as acl from './acl'
import * as event from './event'
import * as eventAttendee from './event-attendee'
import * as eventAttendeeChatMember from './event-attendee-chat-member'
import * as freebusy from './freebusy'
import * as timeoff from './timeoff'
import * as setting from './setting'
import * as exchangeBinding from './exchange-binding'

const authenticationProperties: INodeProperties[] = [
  {
    displayName: 'Authentication',
    name: 'authentication',
    type: 'options',
    options: [
      {
        name: 'Tenant Token',
        value: 'larkSuiteTenantApi',
      },
      {
        name: 'OAuth2',
        value: 'larkSuiteOAuth2Api',
      },
    ],
    default: 'larkSuiteTenantApi',
  },
]

const resourceSelect: INodeProperties[] = [
  {
    displayName: 'Resource',
    name: 'resource',
    type: 'options',
    noDataExpression: true,
    options: [
      {
        name: 'Calendar',
        value: 'Calendar Calendar',
      },
      {
        name: 'ACL',
        value: 'Calendar ACL',
      },
      {
        name: 'Event',
        value: 'Calendar Event',
      },
      {
        name: 'Event Attendee',
        value: 'Calendar Event Attendee',
      },
      {
        name: 'Event Attendee Chat Member',
        value: 'Calendar Event Attendee Chat Member',
      },
      {
        name: 'Freebusy',
        value: 'Calendar Freebusy',
      },
      {
        name: 'Timeoff',
        value: 'Calendar Timeoff',
      },
      {
        name: 'Setting',
        value: 'Calendar Setting',
      },
      {
        name: 'Exchange Binding',
        value: 'Calendar Exchange Binding',
      },
    ],
    default: '',
  },
]

const rawProperties: INodeProperties[] = [
  ...authenticationProperties,
  ...resourceSelect,
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

const { properties, methods: selfMethods } = runHooks(rawProperties)

const methods = aggregateNodeMethods([
  selfMethods,
  calendar.methods,
  acl.methods,
  event.methods,
  eventAttendee.methods,
  eventAttendeeChatMember.methods,
  freebusy.methods,
  timeoff.methods,
  setting.methods,
  exchangeBinding.methods,
])

export { properties, methods }
