import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'PUT /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter_views/{filter_view_id}/conditions/{condition_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
      },
    },
  },
  {
    displayName: 'Condition Id',
    name: 'condition_id',
    required: true,
    description: 'Column letter designation',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
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
        operation: ['Update Filter Conditions'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "compare_type": "string",\n  "expected": [\n    "string"\n  ],\n  "filter_type": "string"\n}',
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
        operation: ['Update Filter Conditions'],
      },
    },
  },
]
/* eslint-disable */
