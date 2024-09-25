import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/filter',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
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
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
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
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
      },
    },
  },
  {
    displayName: 'Col',
    name: 'col',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          col: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
      },
    },
  },
  {
    displayName: 'Condition',
    name: 'condition',
    type: 'json',
    default: '{\n  "expected": [\n    null\n  ]\n}',
    routing: {
      request: {
        body: {
          condition: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
      },
    },
  },
  {
    displayName: 'Range',
    name: 'range',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          range: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Filter'],
        operation: ['Create a filter'],
      },
    },
  },
]
