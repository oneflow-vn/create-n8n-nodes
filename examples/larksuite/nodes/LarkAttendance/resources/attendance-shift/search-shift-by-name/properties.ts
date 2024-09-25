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
    default: 'Morning shift',
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
  {
    displayName:
      "POST /attendance/v1/shifts/query<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Search shift by name'],
      },
    },
  },
]
