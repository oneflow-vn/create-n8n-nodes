import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /drive/v1/permissions/{token}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Token',
    name: 'token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
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
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Perm',
    name: 'perm',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          perm: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates permissions of a collaborator'],
      },
    },
  },
]
