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
    default: 'od-4e6ac4d14bcd5071a37a39de902c7141',
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
