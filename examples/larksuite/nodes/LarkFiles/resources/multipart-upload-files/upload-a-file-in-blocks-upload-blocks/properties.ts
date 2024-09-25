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
  {
    displayName:
      "POST /drive/v1/files/upload_part<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management File Multipart Upload Files'],
        operation: ['Upload a file in blocks Upload blocks'],
      },
    },
  },
]
