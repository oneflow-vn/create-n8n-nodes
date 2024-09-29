import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/move_dimension',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
      },
    },
  },
  {
    displayName: 'Spreadsheet Token',
    name: 'spreadsheet_token',
    required: true,
    description: 'Sheet token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
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
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
      },
    },
  },
  {
    displayName: 'Destination Index',
    name: 'destination_index',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          destination_index: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
      },
    },
  },
  {
    displayName: 'Source',
    name: 'source',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'end_index',
            displayName: 'end_index',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'major_dimension',
            displayName: 'major_dimension',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'start_index',
            displayName: 'start_index',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          source: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "destination_index": 0,\n  "source": {\n    "end_index": 0,\n    "major_dimension": "string",\n    "start_index": 0\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows Or Columns To Move'],
      },
    },
  },
]
/* eslint-disable */
