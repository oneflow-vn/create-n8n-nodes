import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats/{chat_id}/managers/delete_managers',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Delete group administrators'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Delete group administrators'],
      },
    },
  },
  {
    displayName: 'Manager Ids',
    name: 'manager_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          manager_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Delete group administrators'],
      },
    },
  },
]
