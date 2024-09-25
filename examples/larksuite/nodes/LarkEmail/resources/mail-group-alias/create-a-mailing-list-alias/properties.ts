import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Create a mailing list alias'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Create a mailing list alias'],
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
        resource: ['Email Mail Group Alias'],
        operation: ['Create a mailing list alias'],
      },
    },
  },
]
