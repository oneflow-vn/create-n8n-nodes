import { INodeProperties } from 'n8n-workflow'

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
    routing: {
      request: {
        body: {
          subscription_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
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
        operation: ['Create Subscription'],
      },
    },
  },
]
