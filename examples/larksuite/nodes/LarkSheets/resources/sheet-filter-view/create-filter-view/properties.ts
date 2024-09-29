import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter_views',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
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
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
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
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
      },
    },
  },
  {
    displayName: 'Filter View Id',
    name: 'filter_view_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          filter_view_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
      },
    },
  },
  {
    displayName: 'Filter View Name',
    name: 'filter_view_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          filter_view_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
      },
    },
  },
  {
    displayName: 'Range',
    name: 'range',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          range: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "filter_view_id": "string",\n  "filter_view_name": "string",\n  "range": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Sheet Filter View'],
        operation: ['Create Filter View'],
      },
    },
  },
]
/* eslint-disable */
