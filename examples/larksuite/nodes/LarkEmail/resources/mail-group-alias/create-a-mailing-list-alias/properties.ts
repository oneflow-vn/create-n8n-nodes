import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/mailgroups/{mailgroup_id}/aliases',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Create A Mailing List Alias'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    description: 'Mailing list ID or mailing list address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Create A Mailing List Alias'],
      },
    },
  },
  {
    displayName: 'Email Alias',
    name: 'email_alias',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          email_alias: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Create A Mailing List Alias'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "email_alias": "user@example.com"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Email Mail Group Alias'],
        operation: ['Create A Mailing List Alias'],
      },
    },
  },
]
/* eslint-disable */
