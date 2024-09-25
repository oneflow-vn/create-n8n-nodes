import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/shifts/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Search shift by name'],
      },
    },
  },
  {
    displayName: 'Shift Name',
    name: 'shift_name',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          shift_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Search shift by name'],
      },
    },
  },
]
