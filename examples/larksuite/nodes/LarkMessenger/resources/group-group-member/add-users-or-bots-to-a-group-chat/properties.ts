import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats/{chat_id}/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Add Users Or Bots To A Group Chat'],
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
        resource: ['Messenger Group Group Member'],
        operation: ['Add Users Or Bots To A Group Chat'],
      },
    },
  },
  {
    displayName: 'Id List',
    name: 'id_list',
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
          id_list: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Add Users Or Bots To A Group Chat'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "id_list": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Group Group Member'],
        operation: ['Add Users Or Bots To A Group Chat'],
      },
    },
  },
]
/* eslint-disable */
