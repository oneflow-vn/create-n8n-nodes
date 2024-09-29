import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Content Of A Specific Message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'ID of the message whose content is to be obtained',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Content Of A Specific Message'],
      },
    },
  },
]
/* eslint-disable */
