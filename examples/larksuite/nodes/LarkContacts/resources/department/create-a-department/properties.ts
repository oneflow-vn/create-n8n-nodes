import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/departments',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Create Group Chat',
    name: 'create_group_chat',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          create_group_chat: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
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
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'I 18 N Name',
    name: 'i18n_name',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          i18n_name: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Leader User Id',
    name: 'leader_user_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          leader_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Order',
    name: 'order',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          order: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Parent Department Id',
    name: 'parent_department_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          parent_department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
  {
    displayName: 'Unit Ids',
    name: 'unit_ids',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          unit_ids: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Create a department'],
      },
    },
  },
]
