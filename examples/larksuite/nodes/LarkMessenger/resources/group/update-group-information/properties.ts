import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /im/v1/chats/{chat_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    description:
      'Group ID. For details, refer to [Group ID description]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'Add Member Permission',
    name: 'add_member_permission',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          add_member_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'At All Permission',
    name: 'at_all_permission',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          at_all_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'Edit Permission',
    name: 'edit_permission',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          edit_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
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
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'Share Card Permission',
    name: 'share_card_permission',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          share_card_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group'],
        operation: ['Update Group Information'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "add_member_permission": "string",\n  "at_all_permission": "string",\n  "avatar": "string",\n  "description": "string",\n  "edit_permission": "string",\n  "i18n_names": {\n    "en_us": "string",\n    "ja_jp": "string",\n    "zh_cn": "string"\n  },\n  "join_message_visibility": "string",\n  "labels": [\n    "string"\n  ],\n  "leave_message_visibility": "string",\n  "membership_approval": "string",\n  "name": "string",\n  "owner_id": "string",\n  "share_card_permission": "string"\n}',
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
        operation: ['Update Group Information'],
      },
    },
  },
]
/* eslint-disable */
