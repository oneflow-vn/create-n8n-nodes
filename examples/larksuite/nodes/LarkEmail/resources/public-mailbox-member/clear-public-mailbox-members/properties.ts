import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'POST /mail/v1/public_mailboxes/{public_mailbox_id}/members/clear',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Clear Public Mailbox Members'],
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
        operation: ['Clear Public Mailbox Members'],
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
        resource: ['Email Public Mailbox Member'],
        operation: ['Clear Public Mailbox Members'],
      },
    },
  },
]
/* eslint-disable */
