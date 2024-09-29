import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/group/{group_id}/member/add',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description: 'User group ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          member_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
  {
    displayName: 'Member Id Type',
    name: 'member_id_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          member_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
  {
    displayName: 'Member Type',
    name: 'member_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          member_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "member_id": "string",\n  "member_id_type": "string",\n  "member_type": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts User Group User Group Member'],
        operation: ['Add Members To A User Group'],
      },
    },
  },
]
/* eslint-disable */
