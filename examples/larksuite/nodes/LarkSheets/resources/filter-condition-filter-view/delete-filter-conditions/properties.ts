import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter_views/{filter_view_id}/conditions/{condition_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Delete Filter Conditions'],
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
        operation: ['Delete Filter Conditions'],
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
        operation: ['Delete Filter Conditions'],
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
        operation: ['Delete Filter Conditions'],
      },
    },
  },
  {
    displayName: 'Condition Id',
    name: 'condition_id',
    required: true,
    description: 'Letter designation of a column in the range',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Delete Filter Conditions'],
      },
    },
  },
]
/* eslint-disable */
