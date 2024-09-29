import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /speech_to_text/v1/speech/stream_recognize',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Streaming Speech Recognition Asr'],
      },
    },
  },
  {
    displayName: 'Config',
    name: 'config',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'action',
            displayName: 'action',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'engine_type',
            displayName: 'engine_type',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'format',
            displayName: 'format',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'sequence_id',
            displayName: 'sequence_id',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'stream_id',
            displayName: 'stream_id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          config: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Streaming Speech Recognition Asr'],
      },
    },
  },
  {
    displayName: 'Speech',
    name: 'speech',
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
            name: 'speech',
            displayName: 'speech',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          speech: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Streaming Speech Recognition Asr'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "config": {\n    "action": 0,\n    "engine_type": "string",\n    "format": "string",\n    "sequence_id": 0,\n    "stream_id": "string"\n  },\n  "speech": {\n    "speech": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['AI Speech To Text Speech Recognition'],
        operation: ['Streaming Speech Recognition Asr'],
      },
    },
  },
]
/* eslint-disable */
