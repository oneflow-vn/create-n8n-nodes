import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Batch Query Attendance Flow Record'],
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
        resource: ['Attendance Attendance Records'],
        operation: ['Batch Query Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Check Time From',
    name: 'check_time_from',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          check_time_from: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Batch Query Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Check Time To',
    name: 'check_time_to',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          check_time_to: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Batch Query Attendance Flow Record'],
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
        resource: ['Attendance Attendance Records'],
        operation: ['Batch Query Attendance Flow Record'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "check_time_from": "string",\n  "check_time_to": "string",\n  "user_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Records'],
        operation: ['Batch Query Attendance Flow Record'],
      },
    },
  },
]
/* eslint-disable */
