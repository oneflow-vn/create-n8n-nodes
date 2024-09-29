import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/mailgroups',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
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
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
      },
    },
  },
  {
    displayName: 'Who Can Send Mail',
    name: 'who_can_send_mail',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          who_can_send_mail: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "description": "string",\n  "email": "user@example.com",\n  "name": "string",\n  "who_can_send_mail": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Email Mail Group'],
        operation: ['Create A Mailing List'],
      },
    },
  },
]
/* eslint-disable */
