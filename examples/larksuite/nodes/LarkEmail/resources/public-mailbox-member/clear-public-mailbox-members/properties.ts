import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Clear public mailbox members'],
      },
    },
  },
  {
    displayName: 'Public Mailbox Id',
    name: 'public_mailbox_id',
    required: true,
    default: 'xxxxxxxxxxxxxxx or test_public_mailbox@xxx.xx',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Clear public mailbox members'],
      },
    },
  },
  {
    displayName:
      "POST /mail/v1/public_mailboxes/{public_mailbox_id}/members/clear<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Public Mailbox Member'],
        operation: ['Clear public mailbox members'],
      },
    },
  },
]
