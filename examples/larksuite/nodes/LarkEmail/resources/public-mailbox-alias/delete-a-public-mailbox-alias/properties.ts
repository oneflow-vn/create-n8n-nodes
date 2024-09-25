import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Delete a public mailbox alias'],
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
        operation: ['Delete a public mailbox alias'],
      },
    },
  },
  {
    displayName: 'Alias Id',
    name: 'alias_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Alias'],
        operation: ['Delete a public mailbox alias'],
      },
    },
  },
]
