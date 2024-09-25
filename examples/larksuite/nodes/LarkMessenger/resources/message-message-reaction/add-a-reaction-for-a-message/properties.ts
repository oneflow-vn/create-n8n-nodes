import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/messages/{message_id}/reactions',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add a reaction for a message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add a reaction for a message'],
      },
    },
  },
  {
    displayName: 'Reaction Type',
    name: 'reaction_type',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          reaction_type: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Add a reaction for a message'],
      },
    },
  },
]
