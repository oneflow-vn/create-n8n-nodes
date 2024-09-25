import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_flows/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Batch query attendance flow record'],
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
        operation: ['Batch query attendance flow record'],
      },
    },
  },
  {
    displayName: 'Check Time From',
    name: 'check_time_from',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          check_time_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Batch query attendance flow record'],
      },
    },
  },
  {
    displayName: 'Check Time To',
    name: 'check_time_to',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          check_time_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Batch query attendance flow record'],
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
        resource: ['Attendance Attendance Records'],
        operation: ['Batch query attendance flow record'],
      },
    },
  },
]
