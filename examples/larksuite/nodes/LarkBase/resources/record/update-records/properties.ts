import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
    description: 'bitable app_token',
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
    description: 'table_id',
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
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'json',
            default:
              '{\n  "fields": {\n    "performer": [\n      {}\n    ],\n    "corresponding OKR": [\n      null\n    ],\n    "department": [\n      null\n    ]\n  }\n}',
            description: undefined,
            displayName: 'Item',
            name: 'item',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          records: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Update Records'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "records": [\n    {\n      "record_id": "string",\n      "fields": {\n        "manpower": 0,\n        "performer": [\n          {\n            "id": "string"\n          }\n        ],\n        "description": "string",\n        "corresponding OKR": [\n          "string"\n        ],\n        "deadline": 0,\n        "completed": true,\n        "status": "string",\n        "department": [\n          "string"\n        ]\n      }\n    }\n  ]\n}',
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
        operation: ['Update Records'],
      },
    },
  },
]
/* eslint-disable */
