import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Rows or columns to move'],
      },
    },
  },
  {
    displayName: 'Spreadsheet Token',
    name: 'spreadsheet_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows or columns to move'],
      },
    },
  },
  {
    displayName: 'Sheet Id',
    name: 'sheet_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows or columns to move'],
      },
    },
  },
  {
    displayName: 'Destination Index',
    name: 'destination_index',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          destination_index: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows or columns to move'],
      },
    },
  },
  {
    displayName: 'Source',
    name: 'source',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          source: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Row Column'],
        operation: ['Rows or columns to move'],
      },
    },
  },
]
