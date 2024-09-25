import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Create a public mailbox alias'],
      },
    },
  },
  {
    displayName: 'Public Mailbox Id',
    name: 'public_mailbox_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create a public mailbox alias'],
      },
    },
  },
  {
    displayName: 'Email Alias',
    name: 'email_alias',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          email_alias: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Create a public mailbox alias'],
      },
    },
  },
]
