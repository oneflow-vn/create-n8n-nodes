import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Solve Or Restore A Comment'],
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
        operation: ['Solve Or Restore A Comment'],
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
        operation: ['Solve Or Restore A Comment'],
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
        operation: ['Solve Or Restore A Comment'],
      },
    },
  },
  {
    displayName: 'Is Solved',
    name: 'is_solved',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          is_solved: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Solve Or Restore A Comment'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "is_solved": true\n}',
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
        operation: ['Solve Or Restore A Comment'],
      },
    },
  },
]
/* eslint-disable */
