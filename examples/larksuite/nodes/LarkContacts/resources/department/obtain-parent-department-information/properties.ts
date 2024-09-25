import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/departments/parent',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain parent department information'],
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
        resource: ['Contacts Department'],
        operation: ['Obtain parent department information'],
      },
    },
  },
]
