import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}/reactions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Obtain A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Reaction Type',
    name: 'reaction_type',
    description: 'Type of the message reaction to be queried',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          reaction_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Obtain A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'Message ID of the reaction to be obtained',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Obtain A Reaction For A Message'],
      },
    },
  },
]
/* eslint-disable */
