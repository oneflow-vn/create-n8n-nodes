import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'PUT /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
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
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
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
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
      },
    },
  },
  {
    displayName: 'Col',
    name: 'col',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          col: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
      },
    },
  },
  {
    displayName: 'Condition',
    name: 'condition',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'compare_type',
            displayName: 'compare_type',
          },
          {
            type: 'fixedCollection',
            default: [],
            typeOptions: {
              multipleValues: true,
            },
            displayName: 'expected',
            name: 'expected',
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
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'filter_type',
            displayName: 'filter_type',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          condition: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "col": "string",\n  "condition": {\n    "compare_type": "string",\n    "expected": [\n      "string"\n    ],\n    "filter_type": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Update A Filter'],
      },
    },
  },
]
/* eslint-disable */
