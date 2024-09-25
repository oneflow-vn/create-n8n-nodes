import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/authen/v1/access_token',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Obtain the loggedin user ID'],
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
        resource: ['API Access Token User ID'],
        operation: ['Obtain the loggedin user ID'],
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
        operation: ['Obtain the loggedin user ID'],
      },
    },
  },
  {
    displayName: 'Grant Type',
    name: 'grant_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          grant_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token User ID'],
        operation: ['Obtain the loggedin user ID'],
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
        resource: ['API Access Token User ID'],
        operation: ['Obtain the loggedin user ID'],
      },
    },
  },
]
