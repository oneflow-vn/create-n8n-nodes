import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Create or modify attendance groups'],
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
        resource: ['Attendance Attendance Group'],
        operation: ['Create or modify attendance groups'],
      },
    },
  },
  {
    displayName: 'Dept Type',
    name: 'dept_type',
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
        operation: ['Create or modify attendance groups'],
      },
    },
  },
  {
    displayName: 'Group',
    name: 'group',
    type: 'json',
    default:
      '{\n  "bind_dept_ids": [\n    null\n  ],\n  "bind_user_ids": [\n    null\n  ],\n  "except_dept_ids": [\n    null\n  ],\n  "except_user_ids": [\n    null\n  ],\n  "free_punch_cfg": {},\n  "group_leader_ids": [\n    null\n  ],\n  "locations": [\n    {}\n  ],\n  "machines": [\n    {}\n  ],\n  "need_punch_special_days": [\n    {}\n  ],\n  "no_need_punch_special_days": [\n    {}\n  ],\n  "punch_day_shift_ids": [\n    null\n  ]\n}',
    routing: {
      request: {
        body: {
          group: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Create or modify attendance groups'],
      },
    },
  },
]
