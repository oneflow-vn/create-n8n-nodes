import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter_views/{filter_view_id}/conditions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Spreadsheet Token',
    name: 'spreadsheet_token',
    required: true,
    description: 'Spreadsheet token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Sheet Id',
    name: 'sheet_id',
    required: true,
    description: 'Sheet ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Filter View Id',
    name: 'filter_view_id',
    required: true,
    description: 'Filter view ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Compare Type',
    name: 'compare_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          compare_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Condition Id',
    name: 'condition_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          condition_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Expected',
    name: 'expected',
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
          expected: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Filter Type',
    name: 'filter_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          filter_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "compare_type": "string",\n  "condition_id": "string",\n  "expected": [\n    "string"\n  ],\n  "filter_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create A Filter Condition'],
      },
    },
  },
]
/* eslint-disable */
