import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /bitable/v1/apps/{app_token}/tables/{table_id}/records/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Create Records'],
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
        operation: ['Create Records'],
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
        operation: ['Create Records'],
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
            default: '{}',
            description: undefined,
            name: 'fields',
            displayName: 'fields',
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
        operation: ['Create Records'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "records": [\n    {\n      "fields": {}\n    }\n  ]\n}',
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
        operation: ['Create Records'],
      },
    },
  },
]
/* eslint-disable */
