import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /drive/v1/files/{file_token}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management File'],
        operation: ['Delete a file'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    default: 'file',
    type: 'string',
    routing: {
      request: {
        qs: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management File'],
        operation: ['Delete a file'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: 'boxxxxxxx',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management File'],
        operation: ['Delete a file'],
      },
    },
  },
]
