import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/auth/v3/tenant_access_token/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get Tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['API Access Token Store Apps'],
        operation: ['Get Tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        headers: {
          app_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get Tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Secret',
    name: 'app_secret',
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        headers: {
          app_secret: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get Tenantaccesstoken'],
      },
    },
  },
]
/* eslint-disable */
