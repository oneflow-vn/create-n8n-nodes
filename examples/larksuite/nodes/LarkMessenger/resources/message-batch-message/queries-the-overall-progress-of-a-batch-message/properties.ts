import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Queries the overall progress of a batch message'],
      },
    },
  },
  {
    displayName: 'Batch Message Id',
    name: 'batch_message_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: ['Queries the overall progress of a batch message'],
      },
    },
  },
]
