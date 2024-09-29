import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /approval/v4/instances/add_sign',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Add Sign Type',
    name: 'add_sign_type',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          add_sign_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Add Sign User Ids',
    name: 'add_sign_user_ids',
    type: 'fixedCollection',
    default: [],
    typeOptions: {
      multipleValues: true,
    },
    description: undefined,
    placeholder: 'Add item',
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            name: 'Item',
            displayName: 'Item',
            type: 'string',
            default: '',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          add_sign_user_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Approval Code',
    name: 'approval_code',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          approval_code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Approval Method',
    name: 'approval_method',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          approval_method: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Comment',
    name: 'comment',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          comment: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Instance Code',
    name: 'instance_code',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          instance_code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Task Id',
    name: 'task_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          task_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
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
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "add_sign_type": 0,\n  "add_sign_user_ids": [\n    "string"\n  ],\n  "approval_code": "string",\n  "approval_method": 0,\n  "comment": "string",\n  "instance_code": "string",\n  "task_id": "string",\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Approval API Reference'],
        operation: ['Approval Task Addsign'],
      },
    },
  },
]
/* eslint-disable */
