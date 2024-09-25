import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/chats',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Avatar',
    name: 'avatar',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          avatar: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Bot Id List',
    name: 'bot_id_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          bot_id_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Chat Mode',
    name: 'chat_mode',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          chat_mode: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Chat Type',
    name: 'chat_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          chat_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'External',
    name: 'external',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          external: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'I 18 N Names',
    name: 'i18n_names',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          i18n_names: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Join Message Visibility',
    name: 'join_message_visibility',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          join_message_visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Labels',
    name: 'labels',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          labels: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Leave Message Visibility',
    name: 'leave_message_visibility',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          leave_message_visibility: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Membership Approval',
    name: 'membership_approval',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          membership_approval: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'Owner Id',
    name: 'owner_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          owner_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
  {
    displayName: 'User Id List',
    name: 'user_id_list',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          user_id_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Create a group'],
      },
    },
  },
]
