import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/import_tasks',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
  {
    displayName: 'File Extension',
    name: 'file_extension',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          file_extension: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
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
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          file_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
  {
    displayName: 'Point',
    name: 'point',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'mount_key',
            displayName: 'mount_key',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'mount_type',
            displayName: 'mount_type',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          point: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "file_extension": "string",\n  "file_name": "string",\n  "file_token": "string",\n  "point": {\n    "mount_key": "string",\n    "mount_type": 0\n  },\n  "type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Document Import'],
        operation: ['Create An Import Task'],
      },
    },
  },
]
/* eslint-disable */
