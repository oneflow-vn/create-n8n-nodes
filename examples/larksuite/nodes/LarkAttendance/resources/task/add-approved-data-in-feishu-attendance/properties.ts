import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Add Approved Data in Feishu Attendance'],
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
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data in Feishu Attendance'],
      },
    },
  },
  {
    displayName: 'User Approval',
    name: 'user_approval',
    type: 'json',
    default:
      '{\n  "leaves": [\n    {\n      "i18n_names": {}\n    }\n  ],\n  "outs": [\n    {\n      "i18n_names": {}\n    }\n  ],\n  "overtime_works": [\n    {}\n  ],\n  "trips": [\n    {}\n  ]\n}',
    routing: {
      request: {
        body: {
          user_approval: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: [
          'Attendance Attendance（ Historical Version） API Reference Task',
        ],
        operation: ['Add Approved Data in Feishu Attendance'],
      },
    },
  },
]
