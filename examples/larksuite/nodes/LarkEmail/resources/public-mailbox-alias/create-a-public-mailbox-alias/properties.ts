import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/public_mailboxes/{public_mailbox_id}/aliases',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create A Public Mailbox Alias'],
      },
    },
  },
  {
    displayName: 'Public Mailbox Id',
    name: 'public_mailbox_id',
    required: true,
    description: 'Public mailbox ID or public mailbox address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create A Public Mailbox Alias'],
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
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create A Public Mailbox Alias'],
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
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create A Public Mailbox Alias'],
      },
    },
  },
]
/* eslint-disable */
