import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats/{chat_id}/managers/add_managers',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Specify Group Administrators'],
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
        operation: ['Specify Group Administrators'],
      },
    },
  },
  {
    displayName: 'Manager Ids',
    name: 'manager_ids',
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
          manager_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Specify Group Administrators'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "manager_ids": [\n    "string"\n  ]\n}',
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
        operation: ['Specify Group Administrators'],
      },
    },
  },
]
/* eslint-disable */
