import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/files/{file_token}/statistics',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain Statistics Of A File'],
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
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain Statistics Of A File'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'Token of the file',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Statistics'],
        operation: ['Obtain Statistics Of A File'],
      },
    },
  },
]
/* eslint-disable */
