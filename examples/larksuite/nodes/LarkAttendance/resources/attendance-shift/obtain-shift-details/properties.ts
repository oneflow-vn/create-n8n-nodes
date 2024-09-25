import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /attendance/v1/shifts/{shift_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Obtain shift details'],
      },
    },
  },
  {
    displayName: 'Shift Id',
    name: 'shift_id',
    required: true,
    default: '6919358778597097404',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Obtain shift details'],
      },
    },
  },
]
