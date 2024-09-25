import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/mailgroups/{mailgroup_id}/permission_members',
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
          'Create a member who can send emails to mailing list addresses',
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
          'Create a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Create a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Create a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Create a member who can send emails to mailing list addresses',
        ],
      },
    },
  },
]
