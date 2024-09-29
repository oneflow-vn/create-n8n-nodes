import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /optical_char_recognition/v1/image/basic_recognize',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['AI Optical Character Recognition Image Recognition'],
        operation: ['Basic Image Recognition Ocr'],
      },
    },
  },
  {
    displayName: 'Image',
    name: 'image',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          image: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['AI Optical Character Recognition Image Recognition'],
        operation: ['Basic Image Recognition Ocr'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "image": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['AI Optical Character Recognition Image Recognition'],
        operation: ['Basic Image Recognition Ocr'],
      },
    },
  },
]
/* eslint-disable */
