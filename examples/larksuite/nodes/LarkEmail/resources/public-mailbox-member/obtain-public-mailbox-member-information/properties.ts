import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /mail/v1/public_mailboxes/{public_mailbox_id}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Obtain Public Mailbox Member Information'],
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
        operation: ['Obtain Public Mailbox Member Information'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    description: 'Unique identifier of the member in the public mailbox',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Obtain Public Mailbox Member Information'],
      },
    },
  },
]
/* eslint-disable */
