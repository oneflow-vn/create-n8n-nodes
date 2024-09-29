import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/messages/{message_id}/resources/{file_key}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Resource Files In Messages'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    description:
      'Resource type, which can be "image" or "file"; "image" corresponds to the image in the message or the image in the rich-text message; "file" corresponds to the file, audio, or video (except the emoji) in the message',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Resource Files In Messages'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'Message ID for the resource to be queried',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Resource Files In Messages'],
      },
    },
  },
  {
    displayName: 'File Key',
    name: 'file_key',
    required: true,
    description: 'Key of the resource to be queried',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message'],
        operation: ['Obtain Resource Files In Messages'],
      },
    },
  },
]
/* eslint-disable */
