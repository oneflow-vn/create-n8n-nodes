import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Add Sign Type',
    name: 'add_sign_type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          add_sign_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Add Sign User Ids',
    name: 'add_sign_user_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          add_sign_user_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Approval Code',
    name: 'approval_code',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          approval_code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Approval Method',
    name: 'approval_method',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          approval_method: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Comment',
    name: 'comment',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          comment: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Instance Code',
    name: 'instance_code',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          instance_code: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
  {
    displayName: 'Task Id',
    name: 'task_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          task_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
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
        resource: ['Approval API Reference'],
        operation: ['Approval Task AddSign'],
      },
    },
  },
]
