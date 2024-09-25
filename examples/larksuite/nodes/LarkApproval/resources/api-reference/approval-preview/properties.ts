import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Approval Preview'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
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
    routing: {
      request: {
        body: {
          form: '={{ $value }}',
        },
      },
    },
    displayOptions: {
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
        operation: ['Approval Preview'],
      },
    },
  },
  {
    displayName: 'Locale',
    name: 'locale',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          locale: '={{ $value }}',
        },
      },
    },
    displayOptions: {
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
        operation: ['Approval Preview'],
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
        operation: ['Approval Preview'],
      },
    },
  },
]
