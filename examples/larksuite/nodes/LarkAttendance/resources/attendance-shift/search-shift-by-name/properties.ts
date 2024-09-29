import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/shifts/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Search Shift By Name'],
      },
    },
  },
  {
    displayName: 'Shift Name',
    name: 'shift_name',
    description: 'Shift name',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          shift_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance Attendance Shift'],
        operation: ['Search Shift By Name'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance Attendance Shift'],
        operation: ['Search Shift By Name'],
      },
    },
  },
]
/* eslint-disable */
