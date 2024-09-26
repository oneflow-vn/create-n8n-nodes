import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /bitable/v1/apps/{app_token}/tables/{table_id}/records/batch_update',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update Records'],
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
        operation: ['Update Records'],
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
        operation: ['Update Records'],
      },
    },
  },
  {
    displayName: 'Records',
    name: 'records',
    type: 'json',
    default:
      '[\n  {\n    "fields": {\n      "performer": [\n        {}\n      ],\n      "corresponding OKR": [\n        null\n      ],\n      "department": [\n        null\n      ]\n    }\n  }\n]',
    routing: {
      request: {
        body: {
          records: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update Records'],
      },
    },
  },
]
