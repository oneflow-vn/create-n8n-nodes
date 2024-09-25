import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/users/{user_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Delete a user'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    required: true,
    default: 'ou_7dab8a3d3cdcc9da365777c7ad535d62',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Delete a user'],
      },
    },
  },
]
