import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/float_images/{float_image_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain a floating image'],
      },
    },
  },
  {
    displayName: 'Spreadsheet Token',
    name: 'spreadsheet_token',
    required: true,
    default: 'shtcnmBA*****yGehy8',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain a floating image'],
      },
    },
  },
  {
    displayName: 'Sheet Id',
    name: 'sheet_id',
    required: true,
    default: '0b**12',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain a floating image'],
      },
    },
  },
  {
    displayName: 'Float Image Id',
    name: 'float_image_id',
    required: true,
    default: 'ye06SS14ph',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Obtain a floating image'],
      },
    },
  },
]
