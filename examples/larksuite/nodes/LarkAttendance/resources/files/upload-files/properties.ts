import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/files/upload',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Files'],
        operation: ['Upload files'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Files'],
        operation: ['Upload files'],
      },
    },
  },
]
