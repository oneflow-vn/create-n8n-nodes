import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_daily_shifts/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Create or modify schedule'],
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
        resource: ['Attendance Attendance Schedule'],
        operation: ['Create or modify schedule'],
      },
    },
  },
  {
    displayName: 'User Daily Shifts',
    name: 'user_daily_shifts',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          user_daily_shifts: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Create or modify schedule'],
      },
    },
  },
]
