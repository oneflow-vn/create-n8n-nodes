import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/messages/{message_id}/reply',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Reply To Messages'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message to be replied to',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Reply To Messages'],
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
        operation: ['Reply To Messages'],
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
        operation: ['Reply To Messages'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "content": "string",\n  "msg_type": "string"\n}',
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
        operation: ['Reply To Messages'],
      },
    },
  },
]
/* eslint-disable */
