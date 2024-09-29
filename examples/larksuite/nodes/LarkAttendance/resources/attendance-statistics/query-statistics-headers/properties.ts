import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description: 'Type of employee ID for user_id in response body',
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
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'End Date',
    name: 'end_date',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          end_date: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          locale: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'Start Date',
    name: 'start_date',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          start_date: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'Stats Type',
    name: 'stats_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          stats_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistics Headers'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "end_date": 0,\n  "locale": "string",\n  "start_date": 0,\n  "stats_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistics Headers'],
      },
    },
  },
]
/* eslint-disable */
