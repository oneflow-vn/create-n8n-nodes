import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_daily_shifts/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Query schedule information'],
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
        operation: ['Query schedule information'],
      },
    },
  },
  {
    displayName: 'Check Date From',
    name: 'check_date_from',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          check_date_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Query schedule information'],
      },
    },
  },
  {
    displayName: 'Check Date To',
    name: 'check_date_to',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          check_date_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Query schedule information'],
      },
    },
  },
  {
    displayName: 'User Ids',
    name: 'user_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          user_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Query schedule information'],
      },
    },
  },
]
