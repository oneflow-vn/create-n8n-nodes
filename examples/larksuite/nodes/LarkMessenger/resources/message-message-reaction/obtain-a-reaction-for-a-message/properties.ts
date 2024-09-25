import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Obtain a reaction for a message'],
      },
    },
  },
  {
    displayName: 'Reaction Type',
    name: 'reaction_type',
    default: 'LAUGH',
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
        operation: ['Obtain a reaction for a message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    default: 'om_8964d1b4*********2b31383276113',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Obtain a reaction for a message'],
      },
    },
  },
]
