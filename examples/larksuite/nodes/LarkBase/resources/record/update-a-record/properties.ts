import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Update A Record'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'bitable app_token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update A Record'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'table_id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update A Record'],
      },
    },
  },
  {
    displayName: 'Record Id',
    name: 'record_id',
    required: true,
    description: 'record_id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update A Record'],
      },
    },
  },
  {
    displayName: 'Fields',
    name: 'fields',
    type: 'json',
    default:
      '{\n  "performer": [\n    {}\n  ],\n  "corresponding OKR": [\n    null\n  ],\n  "department": [\n    null\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          fields: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update A Record'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "fields": {\n    "manpower": 0,\n    "performer": [\n      {\n        "id": "string"\n      }\n    ],\n    "description": "string",\n    "corresponding OKR": [\n      "string"\n    ],\n    "deadline": 0,\n    "completed": true,\n    "status": "string",\n    "department": [\n      "string"\n    ]\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Bitable Record'],
        operation: ['Update A Record'],
      },
    },
  },
]
/* eslint-disable */
