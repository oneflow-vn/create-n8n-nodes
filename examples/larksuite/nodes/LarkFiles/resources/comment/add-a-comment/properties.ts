import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'File Type',
    name: 'file_type',
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
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Comment Id',
    name: 'comment_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          comment_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Create Time',
    name: 'create_time',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          create_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Is Solved',
    name: 'is_solved',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          is_solved: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Reply List',
    name: 'reply_list',
    type: 'json',
    default:
      '{\n  "replies": [\n    {\n      "content": {\n        "elements": [\n          {\n            "docs_link": {},\n            "person": {},\n            "text_run": {}\n          }\n        ]\n      }\n    }\n  ]\n}',
    routing: {
      request: {
        body: {
          reply_list: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Solved Time',
    name: 'solved_time',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          solved_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Solver User Id',
    name: 'solver_user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          solver_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'Update Time',
    name: 'update_time',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          update_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Comment'],
        operation: ['Add a comment'],
      },
    },
  },
]
