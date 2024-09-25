import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/group/{group_id}/member/remove',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Remove members from a user group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    default: 'g198123',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Remove members from a user group'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          member_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Remove members from a user group'],
      },
    },
  },
  {
    displayName: 'Member Id Type',
    name: 'member_id_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          member_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Remove members from a user group'],
      },
    },
  },
  {
    displayName: 'Member Type',
    name: 'member_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          member_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Remove members from a user group'],
      },
    },
  },
]