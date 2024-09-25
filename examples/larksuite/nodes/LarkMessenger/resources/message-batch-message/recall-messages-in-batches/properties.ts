import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Recall messages in batches'],
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
        operation: ['Recall messages in batches'],
      },
    },
  },
]
