import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/messages/{message_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Card'],
        operation: ['Update App Messages'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message to be updated',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Card'],
        operation: ['Update App Messages'],
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
        resource: ['Messenger Message Message Card'],
        operation: ['Update App Messages'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "content": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Message Message Card'],
        operation: ['Update App Messages'],
      },
    },
  },
]
/* eslint-disable */
