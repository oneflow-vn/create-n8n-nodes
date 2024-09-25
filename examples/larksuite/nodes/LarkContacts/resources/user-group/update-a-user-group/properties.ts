import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /contact/v3/group/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Update a user group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Update a user group'],
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
        operation: ['Update a user group'],
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
        operation: ['Update a user group'],
      },
    },
  },
]
