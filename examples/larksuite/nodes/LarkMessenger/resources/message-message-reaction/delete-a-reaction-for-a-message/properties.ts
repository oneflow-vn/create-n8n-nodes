import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /im/v1/messages/{message_id}/reactions/{reaction_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Delete a reaction for a message'],
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
        operation: ['Delete a reaction for a message'],
      },
    },
  },
  {
    displayName: 'Reaction Id',
    name: 'reaction_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Delete a reaction for a message'],
      },
    },
  },
]
