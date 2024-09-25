import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /translation/v1/text/detect',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Text language recognition'],
      },
    },
  },
  {
    displayName: 'Text',
    name: 'text',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          text: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Text language recognition'],
      },
    },
  },
]
