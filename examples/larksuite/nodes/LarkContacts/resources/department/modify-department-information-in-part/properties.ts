import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /contact/v3/departments/{department_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    description:
      'Department ID, which must be consistent with department_id_type in the query parameter.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Create Group Chat',
    name: 'create_group_chat',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          create_group_chat: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'I 18 N Name',
    name: 'i18n_name',
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
            name: 'en_us',
            displayName: 'en_us',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'ja_jp',
            displayName: 'ja_jp',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'zh_cn',
            displayName: 'zh_cn',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          i18n_name: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Leader User Id',
    name: 'leader_user_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          leader_user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Name',
    name: 'name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Order',
    name: 'order',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          order: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Parent Department Id',
    name: 'parent_department_id',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          parent_department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Unit Ids',
    name: 'unit_ids',
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
          unit_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "create_group_chat": true,\n  "i18n_name": {\n    "en_us": "string",\n    "ja_jp": "string",\n    "zh_cn": "string"\n  },\n  "leader_user_id": "string",\n  "name": "string",\n  "order": "string",\n  "parent_department_id": "string",\n  "unit_ids": [\n    "string"\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts Department'],
        operation: ['Modify Department Information In Part'],
      },
    },
  },
]
/* eslint-disable */
