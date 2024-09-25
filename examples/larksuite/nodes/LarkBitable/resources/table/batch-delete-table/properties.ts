import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/batch_delete',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Delete Table'],
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
        operation: ['Batch Delete Table'],
      },
    },
  },
  {
    displayName: 'Table Ids',
    name: 'table_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          table_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Delete Table'],
      },
    },
  },
]
