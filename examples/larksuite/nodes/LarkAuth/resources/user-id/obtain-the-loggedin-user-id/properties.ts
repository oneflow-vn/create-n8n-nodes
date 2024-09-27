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
