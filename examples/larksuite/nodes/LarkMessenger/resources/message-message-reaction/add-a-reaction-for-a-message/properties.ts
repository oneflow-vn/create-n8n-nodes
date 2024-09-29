import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/messages/{message_id}/reactions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'Message ID of the reaction to be added',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Reaction Type',
    name: 'reaction_type',
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
            name: 'emoji_type',
            displayName: 'emoji_type',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          reaction_type: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "reaction_type": {\n    "emoji_type": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add A Reaction For A Message'],
      },
    },
  },
]
/* eslint-disable */
