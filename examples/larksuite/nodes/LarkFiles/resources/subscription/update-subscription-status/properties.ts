import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'PATCH /drive/v1/files/{file_token}/subscriptions/{subscription_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update Subscription Status'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'File token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update Subscription Status'],
      },
    },
  },
  {
    displayName: 'Subscription Id',
    name: 'subscription_id',
    required: true,
    description: 'Subscription ID',
    default: '1234567890987654321',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update Subscription Status'],
      },
    },
  },
  {
    displayName: 'Is Subscribe',
    name: 'is_subscribe',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          is_subscribe: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update Subscription Status'],
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
        operation: ['Update Subscription Status'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "is_subscribe": true,\n  "file_type": "string"\n}',
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
        operation: ['Update Subscription Status'],
      },
    },
  },
]
/* eslint-disable */
