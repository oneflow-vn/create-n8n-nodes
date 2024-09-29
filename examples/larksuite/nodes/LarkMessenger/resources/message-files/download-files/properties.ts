import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/files/{file_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Files'],
        operation: ['Download Files'],
      },
    },
  },
  {
    displayName: 'File Key',
    name: 'file_key',
    required: true,
    description: 'File key',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Files'],
        operation: ['Download Files'],
      },
    },
  },
]
/* eslint-disable */
