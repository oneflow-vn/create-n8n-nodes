import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /calendar/v4/calendars/{calendar_id}/acls',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create Access Control'],
      },
    },
  },
  {
    displayName: 'Calendar Id',
    name: 'calendar_id',
    required: true,
    description:
      'Calendar ID. For details, see [Calendar-related IDs]({{document_base_url}}/ukTMukTMukTM/uETM3YjLxEzN24SMxcjN#f066a96c).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create Access Control'],
      },
    },
  },
  {
    displayName: 'Role',
    name: 'role',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          role: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create Access Control'],
      },
    },
  },
  {
    displayName: 'Scope',
    name: 'scope',
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
            name: 'type',
            displayName: 'type',
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
          scope: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Calendar ACL'],
        operation: ['Create Access Control'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "role": "string",\n  "scope": {\n    "type": "string",\n    "user_id": "string"\n  }\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Calendar ACL'],
        operation: ['Create Access Control'],
      },
    },
  },
]
/* eslint-disable */
