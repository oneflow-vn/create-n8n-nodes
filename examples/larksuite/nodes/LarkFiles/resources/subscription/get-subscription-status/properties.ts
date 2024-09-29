import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /drive/v1/files/{file_token}/subscriptions/{subscription_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Get Subscription Status'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'file token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Get Subscription Status'],
      },
    },
  },
  {
    displayName: 'Subscription Id',
    name: 'subscription_id',
    required: true,
    description: 'Subscription ID',
    default: '1234567890987654321',
    type: 'number',
    displayOptions: {
      show: {
        resource: ['Docs File Management Subscription'],
        operation: ['Get Subscription Status'],
      },
    },
  },
]
/* eslint-disable */
