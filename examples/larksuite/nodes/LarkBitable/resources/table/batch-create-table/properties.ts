import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
  {
    displayName: 'Tables',
    name: 'tables',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          tables: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
]
