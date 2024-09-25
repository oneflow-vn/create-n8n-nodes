import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Update subscription status'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update subscription status'],
      },
    },
  },
  {
    displayName: 'Subscription Id',
    name: 'subscription_id',
    required: true,
    default: '1234567890987654321',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update subscription status'],
      },
    },
  },
  {
    displayName: 'Is Subscribe',
    name: 'is_subscribe',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_subscribe: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update subscription status'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Update subscription status'],
      },
    },
  },
]
