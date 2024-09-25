import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/mailgroups',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create a mailing list'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create a mailing list'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create a mailing list'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create a mailing list'],
      },
    },
  },
  {
    displayName: 'Who Can Send Mail',
    name: 'who_can_send_mail',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          who_can_send_mail: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Email Mail Group'],
        operation: ['Create a mailing list'],
      },
    },
  },
]
