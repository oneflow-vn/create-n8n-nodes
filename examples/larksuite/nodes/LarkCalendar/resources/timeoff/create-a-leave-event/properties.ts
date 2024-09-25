import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/timeoff_events',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
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
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
      },
    },
  },
  {
    displayName: 'End Time',
    name: 'end_time',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          end_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
      },
    },
  },
  {
    displayName: 'Start Time',
    name: 'start_time',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          start_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
      },
    },
  },
  {
    displayName: 'Timezone',
    name: 'timezone',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          timezone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {},
      },
    },
    displayOptions: {
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
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
        resource: ['Calendar Timeoff'],
        operation: ['Create a leave event'],
      },
    },
  },
]
