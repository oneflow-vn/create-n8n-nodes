import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'bitable app token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
  {
    displayName: 'Tables',
    name: 'tables',
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
            type: 'string',
            default: '',
            description: undefined,
            name: 'name',
            displayName: 'name',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          tables: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "tables": [\n    {\n      "name": "string"\n    }\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Bitable Table'],
        operation: ['Batch Create Table'],
      },
    },
  },
]
/* eslint-disable */
