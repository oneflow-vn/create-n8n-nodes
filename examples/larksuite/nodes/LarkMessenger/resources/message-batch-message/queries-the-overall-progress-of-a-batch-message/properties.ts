import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/batch_messages/{batch_message_id}/get_progress',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: ['Queries The Overall Progress Of A Batch Message'],
      },
    },
  },
  {
    displayName: 'Batch Message Id',
    name: 'batch_message_id',
    required: true,
    description: 'ID of the batch message to be queried',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: ['Queries The Overall Progress Of A Batch Message'],
      },
    },
  },
]
/* eslint-disable */
