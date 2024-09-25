import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/freebusy/list',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query availability'],
      },
    },
  },
  {
    displayName: 'Room Id',
    name: 'room_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          room_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query availability'],
      },
    },
  },
  {
    displayName: 'Time Max',
    name: 'time_max',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          time_max: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query availability'],
      },
    },
  },
  {
    displayName: 'Time Min',
    name: 'time_min',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          time_min: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query availability'],
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
        resource: ['Calendar Freebusy'],
        operation: ['Query availability'],
      },
    },
  },
]
