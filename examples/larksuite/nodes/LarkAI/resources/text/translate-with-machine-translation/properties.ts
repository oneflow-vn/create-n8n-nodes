import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /translation/v1/text/translate',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
  {
    displayName: 'Glossary',
    name: 'glossary',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'from',
            displayName: 'from',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'to',
            displayName: 'to',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          glossary: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
  {
    displayName: 'Source Language',
    name: 'source_language',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          source_language: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
  {
    displayName: 'Target Language',
    name: 'target_language',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          target_language: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
  {
    displayName: 'Text',
    name: 'text',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          text: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "glossary": [\n    {\n      "from": "string",\n      "to": "string"\n    }\n  ],\n  "source_language": "string",\n  "target_language": "string",\n  "text": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['AI Machine Translation Text'],
        operation: ['Translate With Machine Translation'],
      },
    },
  },
]
/* eslint-disable */
