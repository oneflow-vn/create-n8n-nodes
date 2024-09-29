import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}/read_users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Queries The Read Status Of A Message'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    description:
      'User ID categories. Optional values: open_id, union_id, user_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Queries The Read Status Of A Message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message to be queried',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Queries The Read Status Of A Message'],
      },
    },
  },
]
/* eslint-disable */
