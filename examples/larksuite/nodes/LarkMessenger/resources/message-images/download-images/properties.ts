import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/images/{image_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Images'],
        operation: ['Download images'],
      },
    },
  },
  {
    displayName: 'Image Key',
    name: 'image_key',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Images'],
        operation: ['Download images'],
      },
    },
  },
]
