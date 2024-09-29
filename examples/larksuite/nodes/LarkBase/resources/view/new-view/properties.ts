import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /bitable/v1/apps/{app_token}/tables/{table_id}/views',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'Bitable app token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'Table id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
  {
    displayName: 'View Name',
    name: 'view_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          view_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
  {
    displayName: 'View Type',
    name: 'view_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          view_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "view_name": "string",\n  "view_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs Bitable View'],
        operation: ['New View'],
      },
    },
  },
]
/* eslint-disable */
