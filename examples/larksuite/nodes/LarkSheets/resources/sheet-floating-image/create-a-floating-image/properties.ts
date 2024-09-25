import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /sheets/v3/spreadsheets/{spreadsheet_token}/sheets/{sheet_id}/float_images',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Float Image Id',
    name: 'float_image_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          float_image_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Float Image Token',
    name: 'float_image_token',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          float_image_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Height',
    name: 'height',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          height: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Offset X',
    name: 'offset_x',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          offset_x: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Offset Y',
    name: 'offset_y',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          offset_y: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
  {
    displayName: 'Width',
    name: 'width',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          width: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create a floating image'],
      },
    },
  },
]
