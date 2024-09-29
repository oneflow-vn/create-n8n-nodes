import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/files/{file_token}/comments',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
    description: 'Type of the document',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          file_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    description: 'Token of the document',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Comment Id',
    name: 'comment_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          comment_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Create Time',
    name: 'create_time',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          create_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Is Solved',
    name: 'is_solved',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          is_solved: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Reply List',
    name: 'reply_list',
    type: 'json',
    default:
      '{\n  "replies": [\n    {\n      "content": {\n        "elements": [\n          {\n            "docs_link": {},\n            "person": {},\n            "text_run": {}\n          }\n        ]\n      }\n    }\n  ]\n}',
    description: undefined,
    routing: {
      request: {
        body: {
          reply_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Solved Time',
    name: 'solved_time',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          solved_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Solver User Id',
    name: 'solver_user_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          solver_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Update Time',
    name: 'update_time',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          update_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
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
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "comment_id": "string",\n  "create_time": 0,\n  "is_solved": true,\n  "reply_list": {\n    "replies": [\n      {\n        "content": {\n          "elements": [\n            {\n              "docs_link": {\n                "url": "https://example.com/path"\n              },\n              "person": {\n                "user_id": "string"\n              },\n              "text_run": {\n                "text": "string"\n              },\n              "type": "string"\n            }\n          ]\n        },\n        "create_time": 0,\n        "reply_id": "string",\n        "update_time": 0,\n        "user_id": "string"\n      }\n    ]\n  },\n  "solved_time": 0,\n  "solver_user_id": "string",\n  "update_time": 0,\n  "user_id": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Comment'],
        operation: ['Add A Comment'],
      },
    },
  },
]
/* eslint-disable */
