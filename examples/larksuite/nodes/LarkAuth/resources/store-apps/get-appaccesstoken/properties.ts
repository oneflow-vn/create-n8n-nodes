import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/auth/v3/app_access_token/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get appaccesstoken'],
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
        resource: ['API Access Token Store Apps'],
        operation: ['Get appaccesstoken'],
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
        operation: ['Get appaccesstoken'],
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
        operation: ['Get appaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Ticket',
    name: 'app_ticket',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          app_ticket: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get appaccesstoken'],
      },
    },
  },
  {
    displayName: 'POST /open-apis/auth/v3/app_access_token/internal/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get appaccesstoken'],
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
        resource: ['API Access Token Custom Apps'],
        operation: ['Get appaccesstoken'],
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
        resource: ['API Access Token Custom Apps'],
        operation: ['Get appaccesstoken'],
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
        resource: ['API Access Token Custom Apps'],
        operation: ['Get appaccesstoken'],
      },
    },
  },
]