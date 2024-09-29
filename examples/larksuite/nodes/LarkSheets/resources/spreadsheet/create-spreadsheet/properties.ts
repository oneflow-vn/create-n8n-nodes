import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /sheets/v3/spreadsheets',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create Spreadsheet'],
      },
    },
  },
  {
    displayName: 'Folder Token',
    name: 'folder_token',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          folder_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create Spreadsheet'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          title: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create Spreadsheet'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "folder_token": "string",\n  "title": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create Spreadsheet'],
      },
    },
  },
]
/* eslint-disable */
