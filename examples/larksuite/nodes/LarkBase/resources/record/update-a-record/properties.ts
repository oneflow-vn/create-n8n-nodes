import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'PUT /bitable/v1/apps/{app_token}/tables/{table_id}/records/{record_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update a Record'],
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
        resource: ['Docs Bitable Record'],
        operation: ['Update a Record'],
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
        resource: ['Docs Bitable Record'],
        operation: ['Update a Record'],
      },
    },
  },
  {
    displayName: 'Record Id',
    name: 'record_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update a Record'],
      },
    },
  },
  {
    displayName: 'Fields',
    name: 'fields',
    type: 'json',
    default:
      '{\n  "performer": [\n    {}\n  ],\n  "corresponding OKR": [\n    null\n  ],\n  "department": [\n    null\n  ]\n}',
    routing: {
      request: {
        body: {
          fields: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update a Record'],
      },
    },
  },
]
