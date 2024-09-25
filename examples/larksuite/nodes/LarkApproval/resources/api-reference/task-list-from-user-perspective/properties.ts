import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /approval/v4/tasks/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task list from user perspective'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task list from user perspective'],
      },
    },
  },
  {
    displayName: 'Topic',
    name: 'topic',
    default: '1',
    type: 'number',
    routing: {
      request: {
        qs: {
          topic: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task list from user perspective'],
      },
    },
  },
]
