import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/chats/{chat_id}/announcement',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update group announcement info'],
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
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update group announcement info'],
      },
    },
  },
  {
    displayName: 'Requests',
    name: 'requests',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          requests: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update group announcement info'],
      },
    },
  },
  {
    displayName: 'Revision',
    name: 'revision',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          revision: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Update group announcement info'],
      },
    },
  },
]
