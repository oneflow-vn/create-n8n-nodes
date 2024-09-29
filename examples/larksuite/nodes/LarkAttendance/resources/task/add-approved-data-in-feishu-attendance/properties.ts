import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_approvals',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data In Feishu Attendance'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description: '员工工号类型，使用employee_id或者employee_no',
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
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data In Feishu Attendance'],
      },
    },
  },
  {
    displayName: 'User Approval',
    name: 'user_approval',
    type: 'json',
    default:
      '{\n  "leaves": [\n    {\n      "i18n_names": {}\n    }\n  ],\n  "outs": [\n    {\n      "i18n_names": {}\n    }\n  ],\n  "overtime_works": [\n    {}\n  ],\n  "trips": [\n    {}\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          user_approval: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data In Feishu Attendance'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "user_approval": {\n    "date": "string",\n    "leaves": [\n      {\n        "default_locale": "string",\n        "end_time": "string",\n        "i18n_names": {\n          "ch": "string",\n          "en": "string",\n          "ja": "string"\n        },\n        "interval": 0,\n        "reason": "string",\n        "start_time": "string",\n        "uniq_id": "string",\n        "unit": 0\n      }\n    ],\n    "outs": [\n      {\n        "default_locale": "string",\n        "end_time": "string",\n        "i18n_names": {\n          "ch": "string",\n          "en": "string",\n          "ja": "string"\n        },\n        "interval": 0,\n        "reason": "string",\n        "start_time": "string",\n        "uniq_id": "string",\n        "unit": 0\n      }\n    ],\n    "overtime_works": [\n      {\n        "category": 0,\n        "duration": 0,\n        "end_time": "string",\n        "start_time": "string",\n        "type": 0,\n        "unit": 0\n      }\n    ],\n    "trips": [\n      {\n        "end_time": "string",\n        "reason": "string",\n        "start_time": "string"\n      }\n    ],\n    "user_id": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data In Feishu Attendance'],
      },
    },
  },
]
/* eslint-disable */
