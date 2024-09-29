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
        description: '',
      },
      {
        name: 'Acl',
        value: 'Calendar ACL',
        description: '',
      },
      {
        name: 'Event',
        value: 'Calendar Event',
        description: '',
      },
      {
        name: 'Event Attendee',
        value: 'Calendar Event Attendee',
        description: '',
      },
      {
        name: 'Event Attendee Chat Member',
        value: 'Calendar Event Attendee Chat Member',
        description: '',
      },
      {
        name: 'Freebusy',
        value: 'Calendar Freebusy',
        description: '',
      },
      {
        name: 'Timeoff',
        value: 'Calendar Timeoff',
        description: '',
      },
      {
        name: 'Setting',
        value: 'Calendar Setting',
        description: '',
      },
      {
        name: 'Exchange Binding',
        value: 'Calendar Exchange Binding',
        description: '',
      },
    ],
    default: '',
  },
]

const extraProperties: INodeProperties[] = [
  {
    displayName: 'Options',
    name: 'options',
    type: 'collection',
    placeholder: 'Add option',
    default: {},
    options: [
      {
        displayName: 'Use Custom Body',
        name: 'useCustomBody',
        type: 'boolean',
        description: 'Wether to use a custom body',
        required: true,
        default: false,
      },
    ],
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
  ...extraProperties,
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
