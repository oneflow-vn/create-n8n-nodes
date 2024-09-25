import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /calendar/v4/calendars/{calendar_id}/acls/{acl_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Delete access control'],
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
        operation: ['Delete access control'],
      },
    },
  },
  {
    displayName: 'Acl Id',
    name: 'acl_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Delete access control'],
      },
    },
  },
]
