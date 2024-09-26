import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/{table_id}/views',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New view'],
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
        operation: ['New view'],
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
        operation: ['New view'],
      },
    },
  },
  {
    displayName: 'View Name',
    name: 'view_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          view_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New view'],
      },
    },
  },
  {
    displayName: 'View Type',
    name: 'view_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          view_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New view'],
      },
    },
  },
]
