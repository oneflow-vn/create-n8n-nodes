import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          avatar: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Bot Id List',
    name: 'bot_id_list',
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
          bot_id_list: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Chat Mode',
    name: 'chat_mode',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          chat_mode: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Chat Type',
    name: 'chat_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          chat_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
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
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'External',
    name: 'external',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          external: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'I 18 N Names',
    name: 'i18n_names',
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
            name: 'en_us',
            displayName: 'en_us',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'ja_jp',
            displayName: 'ja_jp',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'zh_cn',
            displayName: 'zh_cn',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          i18n_names: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Join Message Visibility',
    name: 'join_message_visibility',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          join_message_visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Labels',
    name: 'labels',
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
          labels: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Leave Message Visibility',
    name: 'leave_message_visibility',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          leave_message_visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Membership Approval',
    name: 'membership_approval',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          membership_approval: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Owner Id',
    name: 'owner_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          owner_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'User Id List',
    name: 'user_id_list',
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
          user_id_list: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "avatar": "string",\n  "bot_id_list": [\n    "string"\n  ],\n  "chat_mode": "string",\n  "chat_type": "string",\n  "description": "string",\n  "external": true,\n  "i18n_names": {\n    "en_us": "string",\n    "ja_jp": "string",\n    "zh_cn": "string"\n  },\n  "join_message_visibility": "string",\n  "labels": [\n    "string"\n  ],\n  "leave_message_visibility": "string",\n  "membership_approval": "string",\n  "name": "string",\n  "owner_id": "string",\n  "user_id_list": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Group'],
        operation: ['Create A Group'],
      },
    },
  },
]
/* eslint-disable */
