import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/files/{file_token}/subscriptions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Create Subscription'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'file token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Create Subscription'],
      },
    },
  },
  {
    displayName: 'Subscription Type',
    name: 'subscription_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          subscription_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Create Subscription'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          file_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Create Subscription'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "subscription_type": "string",\n  "file_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Subscription'],
        operation: ['Create Subscription'],
      },
    },
  },
]
/* eslint-disable */
