import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/settings/generate_caldav_conf',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar Setting'],
        operation: ['Generate Caldav Configuration'],
      },
    },
  },
  {
    displayName: 'Device Name',
    name: 'device_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          device_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar Setting'],
        operation: ['Generate Caldav Configuration'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "device_name": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar Setting'],
        operation: ['Generate Caldav Configuration'],
      },
    },
  },
]
/* eslint-disable */
