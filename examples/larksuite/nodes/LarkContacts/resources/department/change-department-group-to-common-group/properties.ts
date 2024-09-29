import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/departments/unbind_department_chat',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Change Department Group To Common Group'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Change Department Group To Common Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "department_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts Department'],
        operation: ['Change Department Group To Common Group'],
      },
    },
  },
]
/* eslint-disable */
