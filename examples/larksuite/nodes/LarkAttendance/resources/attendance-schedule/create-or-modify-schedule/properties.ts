import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create Or Modify Schedule'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description:
      'Type of employee ID for user_id in request body and in response body',
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
        operation: ['Create Or Modify Schedule'],
      },
    },
  },
  {
    displayName: 'User Daily Shifts',
    name: 'user_daily_shifts',
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
            type: 'number',
            default: 0,
            description: undefined,
            name: 'day_no',
            displayName: 'day_no',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'group_id',
            displayName: 'group_id',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'month',
            displayName: 'month',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'shift_id',
            displayName: 'shift_id',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'user_id',
            displayName: 'user_id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          user_daily_shifts: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Schedule'],
        operation: ['Create Or Modify Schedule'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "user_daily_shifts": [\n    {\n      "day_no": 0,\n      "group_id": "string",\n      "month": 0,\n      "shift_id": "string",\n      "user_id": "string"\n    }\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Schedule'],
        operation: ['Create Or Modify Schedule'],
      },
    },
  },
]
/* eslint-disable */
