import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/unit/unbind_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Dissociate A Department With A Unit'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Unit'],
        operation: ['Dissociate A Department With A Unit'],
      },
    },
  },
  {
    displayName: 'Department Id Type',
    name: 'department_id_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          department_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Unit'],
        operation: ['Dissociate A Department With A Unit'],
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
        operation: ['Dissociate A Department With A Unit'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "department_id": "string",\n  "department_id_type": "string",\n  "unit_id": "string"\n}',
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
        operation: ['Dissociate A Department With A Unit'],
      },
    },
  },
]
/* eslint-disable */
