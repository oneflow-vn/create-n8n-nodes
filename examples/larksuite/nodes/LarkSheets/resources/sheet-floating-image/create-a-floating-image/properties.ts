import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create A Floating Image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Float Image Id',
    name: 'float_image_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          float_image_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Float Image Token',
    name: 'float_image_token',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          float_image_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Height',
    name: 'height',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          height: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Offset X',
    name: 'offset_x',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          offset_x: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Offset Y',
    name: 'offset_y',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          offset_y: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
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
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Width',
    name: 'width',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          width: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "float_image_id": "string",\n  "float_image_token": "string",\n  "height": 0,\n  "offset_x": 0,\n  "offset_y": 0,\n  "range": "string",\n  "width": 0\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Sheets Sheet Floating Image'],
        operation: ['Create A Floating Image'],
      },
    },
  },
]
/* eslint-disable */
