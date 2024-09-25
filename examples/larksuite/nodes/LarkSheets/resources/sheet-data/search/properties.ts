import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/find',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Search'],
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
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Search'],
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
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Search'],
      },
    },
  },
  {
    displayName: 'Find',
    name: 'find',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          find: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Search'],
      },
    },
  },
  {
    displayName: 'Find Condition',
    name: 'find_condition',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          find_condition: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Data'],
        operation: ['Search'],
      },
    },
  },
]
