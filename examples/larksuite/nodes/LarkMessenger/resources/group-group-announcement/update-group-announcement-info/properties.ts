import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/chats/{chat_id}/announcement',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update Group Announcement Info'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    description:
      'The ID of the group with its announcement to be modified. For details, refer to [Group ID description]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description)',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update Group Announcement Info'],
      },
    },
  },
  {
    displayName: 'Requests',
    name: 'requests',
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
            name: 'Item',
            displayName: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          requests: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update Group Announcement Info'],
      },
    },
  },
  {
    displayName: 'Revision',
    name: 'revision',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          revision: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update Group Announcement Info'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "requests": [\n    "string"\n  ],\n  "revision": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update Group Announcement Info'],
      },
    },
  },
]
/* eslint-disable */
