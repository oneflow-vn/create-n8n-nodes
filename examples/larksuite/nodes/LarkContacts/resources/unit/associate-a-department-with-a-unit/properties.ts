import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/unit/bind_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Associate a department with a unit'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Associate a department with a unit'],
      },
    },
  },
  {
    displayName: 'Department Id Type',
    name: 'department_id_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          department_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Associate a department with a unit'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          unit_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Associate a department with a unit'],
      },
    },
  },
]
