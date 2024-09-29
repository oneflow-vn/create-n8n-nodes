import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /application/v6/applications/{app_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update App Category Information'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    description: 'Specifies the language of returned results',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          lang: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update App Category Information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    description: 'App ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update App Category Information'],
      },
    },
  },
  {
    displayName: 'Common Categories',
    name: 'common_categories',
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
            name: 'Item',
            displayName: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          common_categories: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['App Information Application'],
        operation: ['Update App Category Information'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "common_categories": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['App Information Application'],
        operation: ['Update App Category Information'],
      },
    },
  },
]
/* eslint-disable */
