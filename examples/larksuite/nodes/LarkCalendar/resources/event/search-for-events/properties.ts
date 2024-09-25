import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/{calendar_id}/events/search',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Search for events'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Search for events'],
      },
    },
  },
  {
    displayName: 'Filter',
    name: 'filter',
    type: 'json',
    default:
      '{\n  "chat_ids": [\n    null\n  ],\n  "end_time": {},\n  "room_ids": [\n    null\n  ],\n  "start_time": {},\n  "user_ids": [\n    null\n  ]\n}',
    routing: {
      request: {
        body: {
          filter: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Search for events'],
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
        resource: ['Calendar Event'],
        operation: ['Search for events'],
      },
    },
  },
]
