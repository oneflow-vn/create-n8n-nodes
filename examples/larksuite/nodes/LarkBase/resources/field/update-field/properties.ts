import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'PUT /bitable/v1/apps/{app_token}/tables/{table_id}/fields/{field_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'bitable app token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'table id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'Field Id',
    name: 'field_id',
    required: true,
    description: 'field id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'Field Name',
    name: 'field_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          field_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'Type',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          Type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "field_name": "string",\n  "Type": 0\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Bitable Field'],
        operation: ['Update Field'],
      },
    },
  },
]
/* eslint-disable */
