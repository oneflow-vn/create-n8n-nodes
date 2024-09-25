import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/medias/batch_get_tmp_download_url',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Obtain a temporary material download URL'],
      },
    },
  },
  {
    displayName: 'File Tokens',
    name: 'file_tokens',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_tokens: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Media'],
        operation: ['Obtain a temporary material download URL'],
      },
    },
  },
]
