import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'End Time',
    name: 'end_time',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          end_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'Start Time',
    name: 'start_time',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          start_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'Timezone',
    name: 'timezone',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          timezone: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'Title',
    name: 'title',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          title: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "description": "string",\n  "end_time": "string",\n  "start_time": "string",\n  "timezone": "string",\n  "title": "string",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Timeoff'],
        operation: ['Create A Leave Event'],
      },
    },
  },
]
/* eslint-disable */
