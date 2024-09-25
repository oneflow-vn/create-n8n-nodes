import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /mail/v1/mailgroups/{mailgroup_id}/permission_members/{permission_member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete a member who can send emails to mailing list addresses',
        ],
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
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
  {
    displayName: 'Permission Member Id',
    name: 'permission_member_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
]
