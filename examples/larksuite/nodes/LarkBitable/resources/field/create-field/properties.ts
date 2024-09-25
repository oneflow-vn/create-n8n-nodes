import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/{table_id}/fields',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Create Field'],
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
        operation: ['Create Field'],
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
        operation: ['Create Field'],
      },
    },
  },
  {
    displayName: 'Field Name',
    name: 'field_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          field_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Create Field'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'Type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          Type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Create Field'],
      },
    },
  },
]
