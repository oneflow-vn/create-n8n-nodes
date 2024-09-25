import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Create spreadsheet'],
      },
    },
  },
  {
    displayName: 'Folder Token',
    name: 'folder_token',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          folder_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create spreadsheet'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Spreadsheet'],
        operation: ['Create spreadsheet'],
      },
    },
  },
]
