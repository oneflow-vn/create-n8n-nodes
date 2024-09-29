import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /attendance/v1/user_settings/modify',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Attendance User Settings'],
        operation: ['Modify User Settings'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    description:
      'Type of employee ID for user_id in request body and in response body',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          employee_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Attendance User Settings'],
        operation: ['Modify User Settings'],
      },
    },
  },
  {
    displayName: 'User Setting',
    name: 'user_setting',
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
            name: 'face_key',
            displayName: 'face_key',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'user_id',
            displayName: 'user_id',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          user_setting: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Attendance User Settings'],
        operation: ['Modify User Settings'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "user_setting": {\n    "face_key": "string",\n    "user_id": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Attendance User Settings'],
        operation: ['Modify User Settings'],
      },
    },
  },
]
/* eslint-disable */
