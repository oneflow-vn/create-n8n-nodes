import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /bitable/v1/apps/{app_token}/tables/{table_id}/views/{view_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['Delete view'],
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
        resource: ['Docs Bitable View'],
        operation: ['Delete view'],
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
        resource: ['Docs Bitable View'],
        operation: ['Delete view'],
      },
    },
  },
  {
    displayName: 'View Id',
    name: 'view_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['Delete view'],
      },
    },
  },
]
