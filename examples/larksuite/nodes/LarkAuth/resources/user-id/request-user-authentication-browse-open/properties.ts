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
    displayName: 'GET /open-apis/authen/v1/index',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['User Id'],
        operation: ['Request User Authentication Browse Open'],
      },
    },
  },
  {
    displayName: 'Redirect Uri',
    name: 'redirect_uri',
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          redirect_uri: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['User Id'],
        operation: ['Request User Authentication Browse Open'],
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
        qs: {
          app_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['User Id'],
        operation: ['Request User Authentication Browse Open'],
      },
    },
  },
  {
    displayName: 'State',
    name: 'state',
    description: undefined,
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          state: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['User Id'],
        operation: ['Request User Authentication Browse Open'],
      },
    },
  },
]
