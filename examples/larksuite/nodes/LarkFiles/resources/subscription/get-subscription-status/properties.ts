import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /drive/v1/files/{file_token}/subscriptions/{subscription_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Get subscription status'],
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
        operation: ['Get subscription status'],
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
        operation: ['Get subscription status'],
      },
    },
  },
]
