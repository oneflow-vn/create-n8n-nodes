import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        resource: ['API Access Token User ID'],
        operation: ['Request User Authenticationbrowse Open'],
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
        resource: ['API Access Token User ID'],
        operation: ['Request User Authenticationbrowse Open'],
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
        resource: ['API Access Token User ID'],
        operation: ['Request User Authenticationbrowse Open'],
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
        resource: ['API Access Token User ID'],
        operation: ['Request User Authenticationbrowse Open'],
      },
    },
  },
]
/* eslint-disable */
