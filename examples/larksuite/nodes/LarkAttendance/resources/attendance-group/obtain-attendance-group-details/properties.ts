import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /attendance/v1/groups/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Obtain attendance group details'],
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
        operation: ['Obtain attendance group details'],
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
        operation: ['Obtain attendance group details'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    default: '6919358128597097404',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Obtain attendance group details'],
      },
    },
  },
]
