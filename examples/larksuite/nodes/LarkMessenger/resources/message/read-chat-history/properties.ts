import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read Chat History'],
      },
    },
  },
  {
    displayName: 'Container Id Type',
    name: 'container_id_type',
    description: 'Container type, which currently only supports "chat"',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          container_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read Chat History'],
      },
    },
  },
  {
    displayName: 'Container Id',
    name: 'container_id',
    description: 'Container ID, which is namely the chat ID',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          container_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read Chat History'],
      },
    },
  },
]
/* eslint-disable */
