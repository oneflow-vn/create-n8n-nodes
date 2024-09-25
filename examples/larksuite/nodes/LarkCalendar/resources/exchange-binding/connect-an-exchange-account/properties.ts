import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/exchange_bindings',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect an Exchange account'],
      },
    },
  },
  {
    displayName: 'Admin Account',
    name: 'admin_account',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          admin_account: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect an Exchange account'],
      },
    },
  },
  {
    displayName: 'Exchange Account',
    name: 'exchange_account',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          exchange_account: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect an Exchange account'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Exchange Binding'],
        operation: ['Connect an Exchange account'],
      },
    },
  },
]
