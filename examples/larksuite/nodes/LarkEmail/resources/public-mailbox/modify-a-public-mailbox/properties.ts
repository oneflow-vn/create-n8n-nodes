import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /mail/v1/public_mailboxes/{public_mailbox_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox'],
        operation: ['Modify A Public Mailbox'],
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
        resource: ['Email Public Mailbox'],
        operation: ['Modify A Public Mailbox'],
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
        resource: ['Email Public Mailbox'],
        operation: ['Modify A Public Mailbox'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "name": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Email Public Mailbox'],
        operation: ['Modify A Public Mailbox'],
      },
    },
  },
]
/* eslint-disable */
