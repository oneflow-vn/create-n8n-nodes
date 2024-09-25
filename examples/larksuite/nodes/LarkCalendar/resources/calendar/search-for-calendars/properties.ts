import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Search for calendars'],
      },
    },
  },
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          query: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Search for calendars'],
      },
    },
  },
]
