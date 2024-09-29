import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /mail/v1/public_mailboxes/{public_mailbox_id}/aliases/{alias_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Delete A Public Mailbox Alias'],
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
        operation: ['Delete A Public Mailbox Alias'],
      },
    },
  },
  {
    displayName: 'Alias Id',
    name: 'alias_id',
    required: true,
    description: 'Public mailbox alias',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Delete A Public Mailbox Alias'],
      },
    },
  },
]
/* eslint-disable */
