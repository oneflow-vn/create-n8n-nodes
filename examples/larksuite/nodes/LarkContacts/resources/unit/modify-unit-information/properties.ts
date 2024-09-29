import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /contact/v3/unit/{unit_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Modify Unit Information'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    required: true,
    description: 'Unit ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Modify Unit Information'],
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
        operation: ['Modify Unit Information'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "name": "string"\n}',
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
        operation: ['Modify Unit Information'],
      },
    },
  },
]
/* eslint-disable */
