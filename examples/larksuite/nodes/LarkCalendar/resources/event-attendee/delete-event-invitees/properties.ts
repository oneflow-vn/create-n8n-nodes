import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /calendar/v4/calendars/{calendar_id}/events/{event_id}/attendees/batch_delete',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Delete event invitees'],
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
        operation: ['Delete event invitees'],
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
        operation: ['Delete event invitees'],
      },
    },
  },
  {
    displayName: 'Attendee Ids',
    name: 'attendee_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          attendee_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Delete event invitees'],
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
        operation: ['Delete event invitees'],
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
        operation: ['Delete event invitees'],
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
        operation: ['Delete event invitees'],
      },
    },
  },
]
