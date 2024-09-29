import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /im/v1/batch_messages/{batch_message_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: ['Recall Messages In Batches'],
      },
    },
  },
  {
    displayName: 'Batch Message Id',
    name: 'batch_message_id',
    required: true,
    description: 'ID of the batch message that you need to recall',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: ['Recall Messages In Batches'],
      },
    },
  },
]
/* eslint-disable */
