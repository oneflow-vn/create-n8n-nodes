import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/chats/{chat_id}/members/me_join',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Users or bots join a group chat voluntarily'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    default: 'oc_a0553eda9014c201e6969b478895c230',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Users or bots join a group chat voluntarily'],
      },
    },
  },
  {
    displayName:
      "PATCH /im/v1/chats/{chat_id}/members/me_join<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
    name: 'operation',
    type: 'notice',
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Users or bots join a group chat voluntarily'],
      },
    },
  },
]
