import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/medias/{file_token}/download',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Download a material'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: 'boxcnabCdefg12345',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Download a material'],
      },
    },
  },
]
