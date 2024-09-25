import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /calendar/v4/calendars/{calendar_id}/events/{event_id}/attendees',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Attendees',
    name: 'attendees',
    type: 'json',
    default:
      '[\n  {\n    "resource_customization": [\n      {\n        "options": [\n          {}\n        ]\n      }\n    ]\n  }\n]',
    routing: {
      request: {
        body: {
          attendees: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Instance Start Time Admin',
    name: 'instance_start_time_admin',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          instance_start_time_admin: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Is Enable Admin',
    name: 'is_enable_admin',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_enable_admin: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
  {
    displayName: 'Need Notification',
    name: 'need_notification',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          need_notification: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create event invitees'],
      },
    },
  },
]
