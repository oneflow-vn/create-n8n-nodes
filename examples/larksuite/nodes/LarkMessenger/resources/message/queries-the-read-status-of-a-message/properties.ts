import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}/read_users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Queries the read status of a message'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    default: 'open_id',
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
        resource: ['Messenger Message'],
        operation: ['Queries the read status of a message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    default: 'om_dc13264520392913993dd051dba21dcf',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Queries the read status of a message'],
      },
    },
  },
]