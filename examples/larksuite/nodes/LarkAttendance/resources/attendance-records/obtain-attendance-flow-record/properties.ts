import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /attendance/v1/user_flows/{user_flow_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Obtain attendance flow record'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          employee_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Obtain attendance flow record'],
      },
    },
  },
  {
    displayName: 'User Flow Id',
    name: 'user_flow_id',
    required: true,
    default: '6708236686834352397',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Obtain attendance flow record'],
      },
    },
  },
]
