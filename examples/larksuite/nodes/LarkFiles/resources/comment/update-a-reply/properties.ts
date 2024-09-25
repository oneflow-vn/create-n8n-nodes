import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'PUT /drive/v1/files/{file_token}/comments/{comment_id}/replies/{reply_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update a reply'],
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
        operation: ['Update a reply'],
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
        operation: ['Update a reply'],
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
        operation: ['Update a reply'],
      },
    },
  },
  {
    displayName: 'Reply Id',
    name: 'reply_id',
    required: true,
    default: '6916106822734594568',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update a reply'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'json',
    default:
      '{\n  "elements": [\n    {\n      "docs_link": {},\n      "person": {},\n      "text_run": {}\n    }\n  ]\n}',
    routing: {
      request: {
        body: {
          content: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update a reply'],
      },
    },
  },
]
