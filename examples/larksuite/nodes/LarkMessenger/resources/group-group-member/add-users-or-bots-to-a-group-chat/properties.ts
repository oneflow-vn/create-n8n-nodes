import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats/{chat_id}/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Add users or bots to a group chat'],
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
        operation: ['Add users or bots to a group chat'],
      },
    },
  },
  {
    displayName: 'Id List',
    name: 'id_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          id_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Add users or bots to a group chat'],
      },
    },
  },
]
