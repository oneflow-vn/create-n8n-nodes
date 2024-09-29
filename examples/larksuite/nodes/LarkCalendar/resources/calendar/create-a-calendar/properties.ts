import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          color: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Permissions',
    name: 'permissions',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          permissions: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Summary',
    name: 'summary',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          summary: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Summary Alias',
    name: 'summary_alias',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          summary_alias: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "color": 0,\n  "description": "string",\n  "permissions": "string",\n  "summary": "string",\n  "summary_alias": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Calendar'],
        operation: ['Create A Calendar'],
      },
    },
  },
]
/* eslint-disable */
