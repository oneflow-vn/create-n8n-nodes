import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Delete A File'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    description: 'Type of the document in Docs',
    default: '',
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
        operation: ['Delete A File'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'Token of the file to delete',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management File'],
        operation: ['Delete A File'],
      },
    },
  },
]
/* eslint-disable */
