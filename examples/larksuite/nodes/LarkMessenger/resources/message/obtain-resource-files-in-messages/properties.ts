import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}/resources/{file_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain resource files in messages'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    default: 'image',
    type: 'string',
    routing: {
      request: {
        qs: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain resource files in messages'],
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
        operation: ['Obtain resource files in messages'],
      },
    },
  },
  {
    displayName: 'File Key',
    name: 'file_key',
    required: true,
    default: 'file_456a92d6-c6ea-4de4-ac3f-7afcf44ac78g',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain resource files in messages'],
      },
    },
  },
]