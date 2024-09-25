import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /optical_char_recognition/v1/image/basic_recognize',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Optical Character Recognition Image Recognition'],
        operation: ['Basic image recognition OCR'],
      },
    },
  },
  {
    displayName: 'Image',
    name: 'image',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          image: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Optical Character Recognition Image Recognition'],
        operation: ['Basic image recognition OCR'],
      },
    },
  },
]
