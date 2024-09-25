import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/users/find_by_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain the list of users directly under a department'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain the list of users directly under a department'],
      },
    },
  },
]
