import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/files/upload_part',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Upload blocks'],
      },
    },
  },
]
