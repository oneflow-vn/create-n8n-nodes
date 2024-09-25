import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /im/v1/chats/{chat_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update group information'],
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
        operation: ['Update group information'],
      },
    },
  },
  {
    displayName: 'Add Member Permission',
    name: 'add_member_permission',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          add_member_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update group information'],
      },
    },
  },
  {
    displayName: 'At All Permission',
    name: 'at_all_permission',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          at_all_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
      },
    },
  },
  {
    displayName: 'Edit Permission',
    name: 'edit_permission',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          edit_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
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
        operation: ['Update group information'],
      },
    },
  },
  {
    displayName: 'Share Card Permission',
    name: 'share_card_permission',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          share_card_permission: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Group'],
        operation: ['Update group information'],
      },
    },
  },
]
