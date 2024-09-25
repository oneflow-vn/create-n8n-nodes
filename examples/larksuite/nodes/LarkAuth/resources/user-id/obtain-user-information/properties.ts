import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /open-apis/authen/v1/user_info',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Obtain user information'],
      },
    },
  },
  {
    displayName: 'Authorization',
    name: 'Authorization',
    default: 'Bearer {{user_access_token}}',
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
        resource: ['API Access Token User ID'],
        operation: ['Obtain user information'],
      },
    },
  },
  {
    displayName: 'Content Type',
    name: 'Content-Type',
    default: 'application/json; charset=utf-8',
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
        resource: ['API Access Token User ID'],
        operation: ['Obtain user information'],
      },
    },
  },
]
