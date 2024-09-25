import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/auth/v3/app_ticket/resend/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Repush appticket'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          app_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Repush appticket'],
      },
    },
  },
  {
    displayName: 'App Secret',
    name: 'app_secret',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          app_secret: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Repush appticket'],
      },
    },
  },
]
