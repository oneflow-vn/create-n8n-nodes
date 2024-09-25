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
    default: 'img_8d5181ca-0aed-40f0-b0d1-b1452132afbg',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Images'],
        operation: ['Download images'],
      },
    },
  },
]
