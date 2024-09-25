import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_stats_datas/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistical data'],
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
        operation: ['Query statistical data'],
      },
    },
  },
  {
    displayName: 'Current Group Only',
    name: 'current_group_only',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          current_group_only: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistical data'],
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
        operation: ['Query statistical data'],
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
        operation: ['Query statistical data'],
      },
    },
  },
  {
    displayName: 'Need History',
    name: 'need_history',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          need_history: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistical data'],
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
        operation: ['Query statistical data'],
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
        operation: ['Query statistical data'],
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
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query statistical data'],
      },
    },
  },
]
