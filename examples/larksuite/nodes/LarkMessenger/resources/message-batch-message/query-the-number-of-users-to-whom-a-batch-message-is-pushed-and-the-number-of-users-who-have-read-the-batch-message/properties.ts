import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/batch_messages/{batch_message_id}/read_user',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Batch Message'],
        operation: [
          'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
        ],
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
        operation: [
          'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
        ],
      },
    },
  },
]
