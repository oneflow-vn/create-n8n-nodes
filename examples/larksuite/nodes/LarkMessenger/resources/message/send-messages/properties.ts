import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
  {
    displayName: 'Receive Id Type',
    name: 'receive_id_type',
    description:
      'ID type of the message receiver, which can be open_id, user_id, union_id, email, or chat_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          receive_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          content: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
  {
    displayName: 'Msg Type',
    name: 'msg_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          msg_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
  {
    displayName: 'Receive Id',
    name: 'receive_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          receive_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "content": "string",\n  "msg_type": "string",\n  "receive_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Message'],
        operation: ['Send Messages'],
      },
    },
  },
]
/* eslint-disable */
