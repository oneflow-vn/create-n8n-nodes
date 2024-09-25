import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /im/v1/chats/{chat_id}/moderation',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Updates group speech scopes'],
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
        resource: ['Messenger Group'],
        operation: ['Updates group speech scopes'],
      },
    },
  },
  {
    displayName: 'Moderation Setting',
    name: 'moderation_setting',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          moderation_setting: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Updates group speech scopes'],
      },
    },
  },
  {
    displayName: 'Moderator Added List',
    name: 'moderator_added_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          moderator_added_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Updates group speech scopes'],
      },
    },
  },
  {
    displayName: 'Moderator Removed List',
    name: 'moderator_removed_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          moderator_removed_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Updates group speech scopes'],
      },
    },
  },
]
