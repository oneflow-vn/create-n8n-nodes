import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /bitable/v1/apps/{app_token}/tables/{table_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Delete Table'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    default: 'appbcbWCzen6D8dezhoCH2RpMAh',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Delete Table'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    default: 'tblsRc9GRRXKqhvW',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Delete Table'],
      },
    },
  },
]
