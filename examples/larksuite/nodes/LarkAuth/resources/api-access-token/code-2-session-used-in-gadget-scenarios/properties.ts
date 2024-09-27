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
