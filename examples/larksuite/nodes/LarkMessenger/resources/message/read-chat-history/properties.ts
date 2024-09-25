import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read chat history'],
      },
    },
  },
  {
    displayName: 'Container Id Type',
    name: 'container_id_type',
    default: 'chat',
    type: 'string',
    routing: {
      request: {
        qs: {
          container_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read chat history'],
      },
    },
  },
  {
    displayName: 'Container Id',
    name: 'container_id',
    default: 'oc_234jsi43d3ssi993d43545f',
    type: 'string',
    routing: {
      request: {
        qs: {
          container_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Read chat history'],
      },
    },
  },
]