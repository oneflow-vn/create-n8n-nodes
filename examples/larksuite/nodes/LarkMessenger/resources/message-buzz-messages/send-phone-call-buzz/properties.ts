import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/messages/{message_id}/urgent_phone',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send Phone Call Buzz'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    description:
      'User ID categories. Optional values: open_id, union_id, user_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send Phone Call Buzz'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message to be buzzed',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send Phone Call Buzz'],
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
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send Phone Call Buzz'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "user_id_list": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send Phone Call Buzz'],
      },
    },
  },
]
/* eslint-disable */
