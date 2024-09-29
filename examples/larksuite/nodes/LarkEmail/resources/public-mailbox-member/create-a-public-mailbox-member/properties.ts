import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/public_mailboxes/{public_mailbox_id}/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Create A Public Mailbox Member'],
      },
    },
  },
  {
    displayName: 'Public Mailbox Id',
    name: 'public_mailbox_id',
    required: true,
    description:
      'Unique identifier of a public mailbox or the public mailbox address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Create A Public Mailbox Member'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Create A Public Mailbox Member'],
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
        resource: ['Email Public Mailbox Member'],
        operation: ['Create A Public Mailbox Member'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "type": "string",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Email Public Mailbox Member'],
        operation: ['Create A Public Mailbox Member'],
      },
    },
  },
]
/* eslint-disable */
