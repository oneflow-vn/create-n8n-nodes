import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Update statistics settings'],
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
        operation: ['Update statistics settings'],
      },
    },
  },
  {
    displayName: 'User Stats View Id',
    name: 'user_stats_view_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Update statistics settings'],
      },
    },
  },
  {
    displayName: 'View',
    name: 'view',
    type: 'json',
    default:
      '{\n  "items": [\n    {\n      "child_items": [\n        {}\n      ]\n    }\n  ]\n}',
    routing: {
      request: {
        body: {
          view: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Statistics'],
        operation: ['Update statistics settings'],
      },
    },
  },
]
