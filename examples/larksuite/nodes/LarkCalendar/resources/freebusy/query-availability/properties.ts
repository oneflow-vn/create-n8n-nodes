import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Query Availability'],
      },
    },
  },
  {
    displayName: 'Room Id',
    name: 'room_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          room_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query Availability'],
      },
    },
  },
  {
    displayName: 'Time Max',
    name: 'time_max',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          time_max: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query Availability'],
      },
    },
  },
  {
    displayName: 'Time Min',
    name: 'time_min',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          time_min: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Freebusy'],
        operation: ['Query Availability'],
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
        resource: ['Calendar Freebusy'],
        operation: ['Query Availability'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "room_id": "string",\n  "time_max": "1970-01-01T00:00:00.000Z",\n  "time_min": "1970-01-01T00:00:00.000Z",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Freebusy'],
        operation: ['Query Availability'],
      },
    },
  },
]
/* eslint-disable */
