import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/replace',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
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
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
  {
    displayName: 'Sheet Id',
    name: 'sheet_id',
    required: true,
    description: 'Sheet id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
  {
    displayName: 'Find',
    name: 'find',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          find: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
  {
    displayName: 'Find Condition',
    name: 'find_condition',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'boolean',
            default: true,
            description: undefined,
            name: 'include_formulas',
            displayName: 'include_formulas',
          },
          {
            type: 'boolean',
            default: true,
            description: undefined,
            name: 'match_case',
            displayName: 'match_case',
          },
          {
            type: 'boolean',
            default: true,
            description: undefined,
            name: 'match_entire_cell',
            displayName: 'match_entire_cell',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'range',
            displayName: 'range',
          },
          {
            type: 'boolean',
            default: true,
            description: undefined,
            name: 'search_by_regex',
            displayName: 'search_by_regex',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          find_condition: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
  {
    displayName: 'Replacement',
    name: 'replacement',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          replacement: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "find": "string",\n  "find_condition": {\n    "include_formulas": true,\n    "match_case": true,\n    "match_entire_cell": true,\n    "range": "string",\n    "search_by_regex": true\n  },\n  "replacement": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Replace'],
      },
    },
  },
]
/* eslint-disable */
