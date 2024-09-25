import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
      },
    },
  },
  {
    displayName: 'Color',
    name: 'color',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          color: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
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
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
      },
    },
  },
  {
    displayName: 'Permissions',
    name: 'permissions',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          permissions: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
      },
    },
  },
  {
    displayName: 'Summary',
    name: 'summary',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          summary: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
      },
    },
  },
  {
    displayName: 'Summary Alias',
    name: 'summary_alias',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          summary_alias: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Calendar'],
        operation: ['Create a calendar'],
      },
    },
  },
]
