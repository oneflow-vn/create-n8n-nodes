import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_stats_fields/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
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
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
      },
    },
  },
  {
    displayName: 'End Date',
    name: 'end_date',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          end_date: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          locale: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
      },
    },
  },
  {
    displayName: 'Start Date',
    name: 'start_date',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          start_date: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
      },
    },
  },
  {
    displayName: 'Stats Type',
    name: 'stats_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          stats_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistics headers'],
      },
    },
  },
]
