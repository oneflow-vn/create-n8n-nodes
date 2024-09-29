import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /mail/v1/mailgroups/{mailgroup_id}/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    description: 'Mailing list ID or mailing list address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
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
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "department_id": "string",\n  "email": "user@example.com",\n  "type": "string",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Email Mail Group Member'],
        operation: ['Create A Mailing List Member'],
      },
    },
  },
]
/* eslint-disable */
