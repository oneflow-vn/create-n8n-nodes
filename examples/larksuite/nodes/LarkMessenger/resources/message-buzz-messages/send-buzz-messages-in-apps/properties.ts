import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /im/v1/messages/{message_id}/urgent_app',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send buzz messages in apps'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send buzz messages in apps'],
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
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send buzz messages in apps'],
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
        resource: ['Messenger Message Message Buzz Messages'],
        operation: ['Send buzz messages in apps'],
      },
    },
  },
]
