import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /drive/v1/files/{file_token}/comments/{comment_id}/replies/{reply_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Delete A Reply'],
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
        operation: ['Delete A Reply'],
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
        operation: ['Delete A Reply'],
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
        operation: ['Delete A Reply'],
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
        operation: ['Delete A Reply'],
      },
    },
  },
]
/* eslint-disable */
