import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/groups',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Create Or Modify Attendance Groups'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description: 'User ID type',
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
        resource: ['Attendance Attendance Group'],
        operation: ['Create Or Modify Attendance Groups'],
      },
    },
  },
  {
    displayName: 'Dept Type',
    name: 'dept_type',
    description: 'Department ID type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          dept_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Create Or Modify Attendance Groups'],
      },
    },
  },
  {
    displayName: 'Group',
    name: 'group',
    type: 'json',
    default:
      '{\n  "bind_dept_ids": [\n    null\n  ],\n  "bind_user_ids": [\n    null\n  ],\n  "except_dept_ids": [\n    null\n  ],\n  "except_user_ids": [\n    null\n  ],\n  "free_punch_cfg": {},\n  "group_leader_ids": [\n    null\n  ],\n  "locations": [\n    {}\n  ],\n  "machines": [\n    {}\n  ],\n  "need_punch_special_days": [\n    {}\n  ],\n  "no_need_punch_special_days": [\n    {}\n  ],\n  "punch_day_shift_ids": [\n    null\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          group: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Create Or Modify Attendance Groups'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "group": {\n    "allow_out_punch": true,\n    "allow_pc_punch": true,\n    "allow_remedy": true,\n    "bind_dept_ids": [\n      "string"\n    ],\n    "bind_user_ids": [\n      "string"\n    ],\n    "calendar_id": 0,\n    "effect_now": true,\n    "except_dept_ids": [\n      "string"\n    ],\n    "except_user_ids": [\n      "string"\n    ],\n    "face_downgrade": true,\n    "face_punch": true,\n    "face_punch_cfg": 0,\n    "free_punch_cfg": {\n      "free_end_time": "string",\n      "free_start_time": "string",\n      "punch_day": 0,\n      "work_day_no_punch_as_lack": true\n    },\n    "gps_range": 0,\n    "group_id": "string",\n    "group_leader_ids": [\n      "string"\n    ],\n    "group_name": "string",\n    "group_type": 0,\n    "hide_staff_punch_time": true,\n    "locations": [\n      {\n        "address": "string",\n        "bssid": "string",\n        "feature": "string",\n        "ip": "string",\n        "latitude": 0,\n        "location_name": "string",\n        "location_type": 0,\n        "longitude": 0,\n        "map_type": 0,\n        "ssid": "string"\n      }\n    ],\n    "machines": [\n      {\n        "machine_name": "string",\n        "machine_sn": "string"\n      }\n    ],\n    "need_punch_special_days": [\n      {\n        "punch_day": 0,\n        "shift_id": "string"\n      }\n    ],\n    "no_need_punch_special_days": [\n      {\n        "punch_day": 0,\n        "shift_id": "string"\n      }\n    ],\n    "punch_day_shift_ids": [\n      "string"\n    ],\n    "remedy_date_limit": true,\n    "remedy_date_num": 0,\n    "remedy_limit": true,\n    "remedy_limit_count": 0,\n    "replace_basic_pic": true,\n    "show_cumulative_time": true,\n    "show_over_time": true,\n    "time_zone": "string",\n    "work_day_no_punch_as_lack": true\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Group'],
        operation: ['Create Or Modify Attendance Groups'],
      },
    },
  },
]
/* eslint-disable */
