import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    description: 'Type of the document',
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
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'Token of the document',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'Comment Id',
    name: 'comment_id',
    required: true,
    description: 'Comment ID',
    default: '6916106822734578184',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'Reply Id',
    name: 'reply_id',
    required: true,
    description: 'Reply ID',
    default: '6916106822734594568',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'json',
    default:
      '{\n  "elements": [\n    {\n      "docs_link": {},\n      "person": {},\n      "text_run": {}\n    }\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          content: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Update A Reply'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "content": {\n    "elements": [\n      {\n        "docs_link": {\n          "url": "https://example.com/path"\n        },\n        "person": {\n          "user_id": "string"\n        },\n        "text_run": {\n          "text": "string"\n        },\n        "type": "string"\n      }\n    ]\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Comment'],
        operation: ['Update A Reply'],
      },
    },
  },
]
/* eslint-disable */
