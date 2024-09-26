import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /bitable/v1/apps/{app_token}/tables/{table_id}/fields',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['List all fields'],
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
        resource: ['Docs Bitable Field'],
        operation: ['List all fields'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['List all fields'],
      },
    },
  },
]
