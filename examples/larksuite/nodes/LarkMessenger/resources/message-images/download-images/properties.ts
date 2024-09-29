import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/images/{image_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Images'],
        operation: ['Download Images'],
      },
    },
  },
  {
    displayName: 'Image Key',
    name: 'image_key',
    required: true,
    description: 'Image key',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Images'],
        operation: ['Download Images'],
      },
    },
  },
]
/* eslint-disable */
