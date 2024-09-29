import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create Event Invitees'],
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
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
  {
    displayName: 'Event Id',
    name: 'event_id',
    required: true,
    description:
      'Event ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
  {
    displayName: 'Attendees',
    name: 'attendees',
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
            type: 'json',
            default:
              '{\n  "resource_customization": [\n    {\n      "options": [\n        {}\n      ]\n    }\n  ]\n}',
            description: undefined,
            displayName: 'Item',
            name: 'item',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          attendees: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
  {
    displayName: 'Instance Start Time Admin',
    name: 'instance_start_time_admin',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          instance_start_time_admin: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
  {
    displayName: 'Is Enable Admin',
    name: 'is_enable_admin',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          is_enable_admin: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
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
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "attendees": [\n    {\n      "chat_id": "string",\n      "is_optional": true,\n      "operate_id": "string",\n      "resource_customization": [\n        {\n          "index_key": "string",\n          "input_content": "string",\n          "options": [\n            {\n              "option_key": "string",\n              "others_content": "string"\n            }\n          ]\n        }\n      ],\n      "room_id": "string",\n      "third_party_email": "user@example.com",\n      "type": "string",\n      "user_id": "string"\n    }\n  ],\n  "instance_start_time_admin": "string",\n  "is_enable_admin": true,\n  "need_notification": true\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Event Attendee'],
        operation: ['Create Event Invitees'],
      },
    },
  },
]
/* eslint-disable */
