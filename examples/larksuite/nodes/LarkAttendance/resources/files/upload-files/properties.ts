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
    default: '人脸照片.jpg',
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
  {
    displayName:
      "POST /attendance/v1/files/upload<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Files'],
        operation: ['Upload files'],
      },
    },
  },
]
