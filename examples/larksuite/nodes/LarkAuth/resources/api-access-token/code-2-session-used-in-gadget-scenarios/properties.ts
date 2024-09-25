import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/mina/v2/tokenLoginValidate',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token'],
        operation: ['code2sessionUsed in Gadget scenarios'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'Content-Type',
    default: 'application/json',
    type: 'string',
    routing: {
      request: {
        headers: {
          'Content-Type': '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token'],
        operation: ['code2sessionUsed in Gadget scenarios'],
      },
    },
  },
  {
    displayName: 'Authorization',
    name: 'Authorization',
    default: 'Bearer {{app_access_token}}',
    type: 'string',
    routing: {
      request: {
        headers: {
          Authorization: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token'],
        operation: ['code2sessionUsed in Gadget scenarios'],
      },
    },
  },
  {
    displayName: 'Code',
    name: 'code',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token'],
        operation: ['code2sessionUsed in Gadget scenarios'],
      },
    },
  },
]
