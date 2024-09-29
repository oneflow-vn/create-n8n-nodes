import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /attendance/v1/user_stats_views/{user_stats_view_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Update Statistics Settings'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description: 'Employee ID type',
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
        operation: ['Update Statistics Settings'],
      },
    },
  },
  {
    displayName: 'User Stats View Id',
    name: 'user_stats_view_id',
    required: true,
    description:
      'User view ID is obtained as follows: 1) [Query statistics settings]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/query)',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Update Statistics Settings'],
      },
    },
  },
  {
    displayName: 'View',
    name: 'view',
    type: 'json',
    default:
      '{\n  "items": [\n    {\n      "child_items": [\n        {}\n      ]\n    }\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          view: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Update Statistics Settings'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "view": {\n    "items": [\n      {\n        "child_items": [\n          {\n            "code": "string",\n            "value": "string"\n          }\n        ],\n        "code": "string"\n      }\n    ],\n    "stats_type": "string",\n    "user_id": "string",\n    "view_id": "string"\n  }\n}',
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
        operation: ['Update Statistics Settings'],
      },
    },
  },
]
/* eslint-disable */
