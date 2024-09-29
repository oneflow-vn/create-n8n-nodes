import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/users',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Avatar Key',
    name: 'avatar_key',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          avatar_key: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'City',
    name: 'city',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          city: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Country',
    name: 'country',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          country: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Custom Attrs',
    name: 'custom_attrs',
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
            type: 'json',
            default: '{\n  "value": {\n    "generic_user": {}\n  }\n}',
            description: undefined,
            displayName: 'Item',
            name: 'item',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          custom_attrs: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Department Ids',
    name: 'department_ids',
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
          department_ids: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Description',
    name: 'description',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          description: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Email',
    name: 'email',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Employee No',
    name: 'employee_no',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          employee_no: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Employee Type',
    name: 'employee_type',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          employee_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'En Name',
    name: 'en_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          en_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Ent Email Password',
    name: 'ent_email_password',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          ent_email_password: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Enterprise Email',
    name: 'enterprise_email',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          enterprise_email: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Gender',
    name: 'gender',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          gender: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Idp Type',
    name: 'idp_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          idp_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Job Title',
    name: 'job_title',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          job_title: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Join Time',
    name: 'join_time',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          join_time: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
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
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Mobile',
    name: 'mobile',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          mobile: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Mobile Visible',
    name: 'mobile_visible',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          mobile_visible: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
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
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Need Send Notification',
    name: 'need_send_notification',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          need_send_notification: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Nickname',
    name: 'nickname',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          nickname: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Notification Option',
    name: 'notification_option',
    type: 'fixedCollection',
    default: {},
    description: undefined,
    options: [
      {
        name: 'items',
        displayName: 'Items',
        values: [
          {
            type: 'fixedCollection',
            default: [],
            typeOptions: {
              multipleValues: true,
            },
            displayName: 'channels',
            name: 'channels',
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
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'language',
            displayName: 'language',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          notification_option: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Orders',
    name: 'orders',
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
            type: 'string',
            default: '',
            description: undefined,
            name: 'department_id',
            displayName: 'department_id',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'department_order',
            displayName: 'department_order',
          },
          {
            type: 'number',
            default: 0,
            description: undefined,
            name: 'user_order',
            displayName: 'user_order',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          orders: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Positions',
    name: 'positions',
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
            type: 'string',
            default: '',
            description: undefined,
            name: 'department_id',
            displayName: 'department_id',
          },
          {
            type: 'boolean',
            default: true,
            description: undefined,
            name: 'is_major',
            displayName: 'is_major',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'leader_position_code',
            displayName: 'leader_position_code',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'leader_user_id',
            displayName: 'leader_user_id',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'position_code',
            displayName: 'position_code',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'position_name',
            displayName: 'position_name',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          positions: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
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
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Work Station',
    name: 'work_station',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          work_station: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "avatar_key": "string",\n  "city": "string",\n  "country": "string",\n  "custom_attrs": [\n    {\n      "id": "string",\n      "type": "string",\n      "value": {\n        "generic_user": {\n          "id": "string",\n          "type": 0\n        },\n        "option_id": "string",\n        "pc_url": "https://example.com/path",\n        "text": "string",\n        "url": "https://example.com/path"\n      }\n    }\n  ],\n  "department_ids": [\n    "string"\n  ],\n  "description": "string",\n  "email": "user@example.com",\n  "employee_no": "string",\n  "employee_type": 0,\n  "en_name": "string",\n  "ent_email_password": "string",\n  "enterprise_email": "user@example.com",\n  "gender": 0,\n  "idp_type": "string",\n  "job_title": "string",\n  "join_time": 0,\n  "leader_user_id": "string",\n  "mobile": "string",\n  "mobile_visible": true,\n  "name": "string",\n  "need_send_notification": true,\n  "nickname": "string",\n  "notification_option": {\n    "channels": [\n      "string"\n    ],\n    "language": "string"\n  },\n  "orders": [\n    {\n      "department_id": "string",\n      "department_order": 0,\n      "user_order": 0\n    }\n  ],\n  "positions": [\n    {\n      "department_id": "string",\n      "is_major": true,\n      "leader_position_code": "string",\n      "leader_user_id": "string",\n      "position_code": "string",\n      "position_name": "string"\n    }\n  ],\n  "user_id": "string",\n  "work_station": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts User'],
        operation: ['Create A User'],
      },
    },
  },
]
/* eslint-disable */
