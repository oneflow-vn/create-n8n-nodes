import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/unit',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create A Unit'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create A Unit'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          unit_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create A Unit'],
      },
    },
  },
  {
    displayName: 'Unit Type',
    name: 'unit_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          unit_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create A Unit'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "name": "string",\n  "unit_id": "string",\n  "unit_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts Unit'],
        operation: ['Create A Unit'],
      },
    },
  },
]
/* eslint-disable */
