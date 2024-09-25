import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/files/{file_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Files'],
        operation: ['Download files'],
      },
    },
  },
  {
    displayName: 'File Key',
    name: 'file_key',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Files'],
        operation: ['Download files'],
      },
    },
  },
]
