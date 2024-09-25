import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Create a filter condition'],
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
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
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
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
  {
    displayName: 'Filter View Id',
    name: 'filter_view_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
  {
    displayName: 'Compare Type',
    name: 'compare_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          compare_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
  {
    displayName: 'Condition Id',
    name: 'condition_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          condition_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
  {
    displayName: 'Expected',
    name: 'expected',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          expected: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
  {
    displayName: 'Filter Type',
    name: 'filter_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          filter_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Filter Condition Filter View'],
        operation: ['Create a filter condition'],
      },
    },
  },
]
