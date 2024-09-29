import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/medias/upload_finish',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete Uploading A Material In Blocks'],
      },
    },
  },
  {
    displayName: 'Block Num',
    name: 'block_num',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          block_num: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete Uploading A Material In Blocks'],
      },
    },
  },
  {
    displayName: 'Upload Id',
    name: 'upload_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          upload_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete Uploading A Material In Blocks'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "block_num": 0,\n  "upload_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Media Multipart Upload Media'],
        operation: ['Complete Uploading A Material In Blocks'],
      },
    },
  },
]
/* eslint-disable */
