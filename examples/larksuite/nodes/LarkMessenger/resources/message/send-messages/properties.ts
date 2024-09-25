import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /im/v1/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send messages'],
      },
    },
  },
  {
    displayName: 'Receive Id Type',
    name: 'receive_id_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          receive_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send messages'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          content: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send messages'],
      },
    },
  },
  {
    displayName: 'Msg Type',
    name: 'msg_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          msg_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send messages'],
      },
    },
  },
  {
    displayName: 'Receive Id',
    name: 'receive_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          receive_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Send messages'],
      },
    },
  },
]
