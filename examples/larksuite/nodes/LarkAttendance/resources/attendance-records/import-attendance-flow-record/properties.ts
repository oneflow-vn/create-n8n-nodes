import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_flows/batch_create',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Import attendance flow record'],
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
        resource: ['Attendance Attendance Records'],
        operation: ['Import attendance flow record'],
      },
    },
  },
  {
    displayName: 'Flow Records',
    name: 'flow_records',
    type: 'json',
    default: '[\n  {\n    "photo_urls": [\n      null\n    ]\n  }\n]',
    routing: {
      request: {
        body: {
          flow_records: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Records'],
        operation: ['Import attendance flow record'],
      },
    },
  },
]
