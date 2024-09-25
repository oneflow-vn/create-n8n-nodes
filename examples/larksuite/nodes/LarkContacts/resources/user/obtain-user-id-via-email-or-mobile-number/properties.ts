import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/users/batch_get_id',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain user ID via email or mobile number'],
      },
    },
  },
  {
    displayName: 'Emails',
    name: 'emails',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          emails: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain user ID via email or mobile number'],
      },
    },
  },
  {
    displayName: 'Mobiles',
    name: 'mobiles',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          mobiles: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain user ID via email or mobile number'],
      },
    },
  },
]
