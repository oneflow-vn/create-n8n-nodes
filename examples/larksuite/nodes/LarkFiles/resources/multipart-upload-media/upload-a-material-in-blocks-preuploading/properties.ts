import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/medias/upload_prepare',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Extra',
    name: 'extra',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          extra: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Parent Node',
    name: 'parent_node',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          parent_node: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Parent Type',
    name: 'parent_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          parent_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Size',
    name: 'size',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          size: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "extra": "string",\n  "file_name": "string",\n  "parent_node": "string",\n  "parent_type": "string",\n  "size": 0\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Upload A Material In Blocks Preuploading'],
      },
    },
  },
]
/* eslint-disable */
