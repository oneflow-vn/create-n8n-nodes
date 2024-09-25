import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /attendance/v1/groups/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Group'],
        operation: ['Delete attendance group'],
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
        operation: ['Delete attendance group'],
      },
    },
  },
]
