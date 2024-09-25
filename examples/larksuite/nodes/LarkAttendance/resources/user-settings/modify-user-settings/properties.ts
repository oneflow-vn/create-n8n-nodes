import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_settings/modify',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance User Settings'],
        operation: ['Modify user settings'],
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
        resource: ['Attendance User Settings'],
        operation: ['Modify user settings'],
      },
    },
  },
  {
    displayName: 'User Setting',
    name: 'user_setting',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          user_setting: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance User Settings'],
        operation: ['Modify user settings'],
      },
    },
  },
]
