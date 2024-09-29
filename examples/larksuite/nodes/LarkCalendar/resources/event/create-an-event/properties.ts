import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    description:
      'Calendar ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Attendee Ability',
    name: 'attendee_ability',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          attendee_ability: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          color: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'End Time',
    name: 'end_time',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'date',
            displayName: 'date',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'timestamp',
            displayName: 'timestamp',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'timezone',
            displayName: 'timezone',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          end_time: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Free Busy Status',
    name: 'free_busy_status',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          free_busy_status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Location',
    name: 'location',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'address',
            displayName: 'address',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'latitude',
            displayName: 'latitude',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'longitude',
            displayName: 'longitude',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'name',
            displayName: 'name',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          location: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Need Notification',
    name: 'need_notification',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          need_notification: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Recurrence',
    name: 'recurrence',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          recurrence: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Reminders',
    name: 'reminders',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'minutes',
            displayName: 'minutes',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          reminders: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Schemas',
    name: 'schemas',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'app_link',
            displayName: 'app_link',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'ui_name',
            displayName: 'ui_name',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'ui_status',
            displayName: 'ui_status',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          schemas: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Start Time',
    name: 'start_time',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'date',
            displayName: 'date',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'timestamp',
            displayName: 'timestamp',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'timezone',
            displayName: 'timezone',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          start_time: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Summary',
    name: 'summary',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          summary: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Vchat',
    name: 'vchat',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'description',
            displayName: 'description',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'icon_type',
            displayName: 'icon_type',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'meeting_url',
            displayName: 'meeting_url',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'vc_type',
            displayName: 'vc_type',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          vchat: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Visibility',
    name: 'visibility',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "attendee_ability": "string",\n  "color": 0,\n  "description": "string",\n  "end_time": {\n    "date": "string",\n    "timestamp": "string",\n    "timezone": "string"\n  },\n  "free_busy_status": "string",\n  "location": {\n    "address": "string",\n    "latitude": 0,\n    "longitude": 0,\n    "name": "string"\n  },\n  "need_notification": true,\n  "recurrence": "string",\n  "reminders": [\n    {\n      "minutes": 0\n    }\n  ],\n  "schemas": [\n    {\n      "app_link": "string",\n      "ui_name": "string",\n      "ui_status": "string"\n    }\n  ],\n  "start_time": {\n    "date": "string",\n    "timestamp": "string",\n    "timezone": "string"\n  },\n  "summary": "string",\n  "vchat": {\n    "description": "string",\n    "icon_type": "string",\n    "meeting_url": "https://example.com/path",\n    "vc_type": "string"\n  },\n  "visibility": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Event'],
        operation: ['Create An Event'],
      },
    },
  },
]
/* eslint-disable */
