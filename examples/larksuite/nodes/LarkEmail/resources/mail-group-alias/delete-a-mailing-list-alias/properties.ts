import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /mail/v1/mailgroups/{mailgroup_id}/aliases/{alias_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Delete a mailing list alias'],
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
        operation: ['Delete a mailing list alias'],
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
        resource: ['Email Mail Group Alias'],
        operation: ['Delete a mailing list alias'],
      },
    },
  },
]
