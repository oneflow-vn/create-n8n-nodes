import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/{calendar_id}/events',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
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
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Attendee Ability',
    name: 'attendee_ability',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          attendee_ability: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          color: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'End Time',
    name: 'end_time',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          end_time: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Free Busy Status',
    name: 'free_busy_status',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          free_busy_status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Location',
    name: 'location',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          location: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
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
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Recurrence',
    name: 'recurrence',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          recurrence: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Reminders',
    name: 'reminders',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          reminders: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Schemas',
    name: 'schemas',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          schemas: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Start Time',
    name: 'start_time',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          start_time: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Summary',
    name: 'summary',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          summary: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Vchat',
    name: 'vchat',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          vchat: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
  {
    displayName: 'Visibility',
    name: 'visibility',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create an event'],
      },
    },
  },
]
