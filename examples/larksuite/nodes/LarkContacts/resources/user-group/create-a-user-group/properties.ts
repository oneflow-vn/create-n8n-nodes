import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/group',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Create a user group'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Create a user group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          group_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Create a user group'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Create a user group'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Create a user group'],
      },
    },
  },
]
