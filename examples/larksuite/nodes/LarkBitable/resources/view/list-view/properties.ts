import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /bitable/v1/apps/{app_token}/tables/{table_id}/views',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List view'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    default: 'AppbcbWCzen6D8dezhoCH2RpMAh',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List view'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    default: 'TblsRc9GRRXKqhvW',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List view'],
      },
    },
  },
]
