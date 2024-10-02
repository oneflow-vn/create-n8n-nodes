/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

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
        resource: ['Store Apps'],
        operation: ['Get Tenant Access Token'],
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
        resource: ['Custom Apps'],
        operation: ['Get Tenant Access Token'],
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
        resource: ['Custom Apps'],
        operation: ['Get Tenant Access Token'],
      },
    },
  },
]
