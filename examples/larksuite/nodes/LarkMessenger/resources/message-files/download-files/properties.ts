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
    default: 'file_456a92d6-c6ea-4de4-ac3f-7afcf44ac78g',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Files'],
        operation: ['Download files'],
      },
    },
  },
]
