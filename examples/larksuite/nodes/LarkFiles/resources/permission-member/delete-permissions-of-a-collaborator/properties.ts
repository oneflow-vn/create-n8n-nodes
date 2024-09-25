import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /drive/v1/permissions/{token}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    default: 'doc',
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
        operation: ['Delete permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Member Type',
    name: 'member_type',
    default: 'openid',
    type: 'string',
    routing: {
      request: {
        qs: {
          member_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Token',
    name: 'token',
    required: true,
    default: 'doccnBKgoMyY5OMbUG6FioTXuBe',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete permissions of a collaborator'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    default: 'ou_7dab8a3d3cdcc9da365777c7ad535d62',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete permissions of a collaborator'],
      },
    },
  },
]
