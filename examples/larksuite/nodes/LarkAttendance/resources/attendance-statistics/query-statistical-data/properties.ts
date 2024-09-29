import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Query Statistical Data'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description:
      'Type of employee ID for user_ids in request body and user_id in response body',
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
        operation: ['Query Statistical Data'],
      },
    },
  },
  {
    displayName: 'Current Group Only',
    name: 'current_group_only',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          current_group_only: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistical Data'],
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
        operation: ['Query Statistical Data'],
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
        operation: ['Query Statistical Data'],
      },
    },
  },
  {
    displayName: 'Need History',
    name: 'need_history',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          need_history: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistical Data'],
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
        operation: ['Query Statistical Data'],
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
        operation: ['Query Statistical Data'],
      },
    },
  },
  {
    displayName: 'User Ids',
    name: 'user_ids',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            name: 'Item',
            displayName: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          user_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Query Statistical Data'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "current_group_only": true,\n  "end_date": 0,\n  "locale": "string",\n  "need_history": true,\n  "start_date": 0,\n  "stats_type": "string",\n  "user_ids": [\n    "string"\n  ]\n}',
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
        operation: ['Query Statistical Data'],
      },
    },
  },
]
/* eslint-disable */
