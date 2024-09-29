import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /translation/v1/text/detect',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Machine Translation Text'],
        operation: ['Text Language Recognition'],
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
        operation: ['Text Language Recognition'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "text": "string"\n}',
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
        operation: ['Text Language Recognition'],
      },
    },
  },
]
/* eslint-disable */
