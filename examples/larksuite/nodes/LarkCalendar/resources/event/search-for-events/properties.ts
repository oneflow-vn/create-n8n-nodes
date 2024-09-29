import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Search For Events'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    description:
      'Calendar ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar Event'],
        operation: ['Search For Events'],
      },
    },
  },
  {
    displayName: 'Filter',
    name: 'filter',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'fixedCollection',
            default: [],
            typeOptions: {
              multipleValues: true,
            },
            displayName: 'chat_ids',
            name: 'chat_ids',
            description: undefined,
            placeholder: 'Add item',
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    name: 'Item',
                    displayName: 'Item',
                    type: 'string',
                    default: '',
                  },
                ],
              },
            ],
          },
          {
            type: 'fixedCollection',
            default: {},
            description: undefined,
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'date',
                    displayName: 'date',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'timestamp',
                    displayName: 'timestamp',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'timezone',
                    displayName: 'timezone',
                  },
                ],
              },
            ],
            name: 'end_time',
            displayName: 'end_time',
          },
          {
            type: 'fixedCollection',
            default: [],
            typeOptions: {
              multipleValues: true,
            },
            displayName: 'room_ids',
            name: 'room_ids',
            description: undefined,
            placeholder: 'Add item',
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    name: 'Item',
                    displayName: 'Item',
                    type: 'string',
                    default: '',
                  },
                ],
              },
            ],
          },
          {
            type: 'fixedCollection',
            default: {},
            description: undefined,
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'date',
                    displayName: 'date',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'timestamp',
                    displayName: 'timestamp',
                  },
                  {
                    type: 'string',
                    default: '',
                    description: undefined,
                    name: 'timezone',
                    displayName: 'timezone',
                  },
                ],
              },
            ],
            name: 'start_time',
            displayName: 'start_time',
          },
          {
            type: 'fixedCollection',
            default: [],
            typeOptions: {
              multipleValues: true,
            },
            displayName: 'user_ids',
            name: 'user_ids',
            description: undefined,
            placeholder: 'Add item',
            options: [
              {
                name: 'items',
                displayName: 'Items',
                values: [
                  {
                    name: 'Item',
                    displayName: 'Item',
                    type: 'string',
                    default: '',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          filter: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Search For Events'],
      },
    },
  },
  {
    displayName: 'Query',
    name: 'query',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          query: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Event'],
        operation: ['Search For Events'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "filter": {\n    "chat_ids": [\n      "string"\n    ],\n    "end_time": {\n      "date": "string",\n      "timestamp": "string",\n      "timezone": "string"\n    },\n    "room_ids": [\n      "string"\n    ],\n    "start_time": {\n      "date": "string",\n      "timestamp": "string",\n      "timezone": "string"\n    },\n    "user_ids": [\n      "string"\n    ]\n  },\n  "query": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Event'],
        operation: ['Search For Events'],
      },
    },
  },
]
/* eslint-disable */
