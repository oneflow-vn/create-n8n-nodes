import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/medias/upload_all',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Upload a material'],
      },
    },
  },
  {
    displayName:
      "POST /drive/v1/medias/upload_all<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Upload a material'],
      },
    },
  },
]
