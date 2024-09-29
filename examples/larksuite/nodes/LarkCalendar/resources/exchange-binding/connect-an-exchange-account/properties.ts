import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/exchange_bindings',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect An Exchange Account'],
      },
    },
  },
  {
    displayName: 'Admin Account',
    name: 'admin_account',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          admin_account: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect An Exchange Account'],
      },
    },
  },
  {
    displayName: 'Exchange Account',
    name: 'exchange_account',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          exchange_account: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect An Exchange Account'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect An Exchange Account'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "admin_account": "user@example.com",\n  "exchange_account": "user@example.com",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect An Exchange Account'],
      },
    },
  },
]
/* eslint-disable */
