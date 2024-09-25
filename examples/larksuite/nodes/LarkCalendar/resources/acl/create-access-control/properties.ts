import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/{calendar_id}/acls',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create access control'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create access control'],
      },
    },
  },
  {
    displayName: 'Role',
    name: 'role',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          role: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create access control'],
      },
    },
  },
  {
    displayName: 'Scope',
    name: 'scope',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          scope: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create access control'],
      },
    },
  },
]
