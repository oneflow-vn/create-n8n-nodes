import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/files/{file_token}/statistics',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain statistics of a file'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain statistics of a file'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain statistics of a file'],
      },
    },
  },
]
