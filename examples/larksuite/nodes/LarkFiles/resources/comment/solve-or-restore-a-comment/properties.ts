import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /drive/v1/files/{file_token}/comments/{comment_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve or restore a comment'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve or restore a comment'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve or restore a comment'],
      },
    },
  },
  {
    displayName: 'Comment Id',
    name: 'comment_id',
    required: true,
    default: '6916106822734578184',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve or restore a comment'],
      },
    },
  },
  {
    displayName: 'Is Solved',
    name: 'is_solved',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_solved: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve or restore a comment'],
      },
    },
  },
]
