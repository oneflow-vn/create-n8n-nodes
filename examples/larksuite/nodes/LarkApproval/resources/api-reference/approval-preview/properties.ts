import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /approval/v4/instances/preview',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Preview'],
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
        operation: ['Approval Preview'],
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
        resource: ['Approval API Reference'],
        operation: ['Approval Preview'],
      },
    },
  },
  {
    displayName: 'Form',
    name: 'form',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          form: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Preview'],
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
        operation: ['Approval Preview'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          locale: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Preview'],
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
        operation: ['Approval Preview'],
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
        operation: ['Approval Preview'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "approval_code": "string",\n  "department_id": "string",\n  "form": "string",\n  "instance_code": "string",\n  "locale": "string",\n  "task_id": "string",\n  "user_id": "string"\n}',
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
        operation: ['Approval Preview'],
      },
    },
  },
]
/* eslint-disable */
