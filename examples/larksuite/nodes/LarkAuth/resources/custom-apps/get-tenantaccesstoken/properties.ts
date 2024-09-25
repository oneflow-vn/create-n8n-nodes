import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /open-apis/auth/v3/tenant_access_token/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get tenantaccesstoken'],
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
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Access Token',
    name: 'app_access_token',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          app_access_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'Tenant Key',
    name: 'tenant_key',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          tenant_key: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Store Apps'],
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'POST /open-apis/auth/v3/tenant_access_token/internal/',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    default: '{{app_id}}',
    type: 'string',
    routing: {
      request: {
        headers: {
          app_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
  {
    displayName: 'App Secret',
    name: 'app_secret',
    default: '{{app_secret}}',
    type: 'string',
    routing: {
      request: {
        headers: {
          app_secret: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['API Access Token Custom Apps'],
        operation: ['Get tenantaccesstoken'],
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
        operation: ['Get tenantaccesstoken'],
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
        operation: ['Get tenantaccesstoken'],
      },
    },
  },
]
