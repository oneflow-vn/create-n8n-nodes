import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /contact/v3/employee_type_enums/{enum_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'Enum Id',
    name: 'enum_id',
    required: true,
    description: 'Enum ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          content: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'Enum Status',
    name: 'enum_status',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          enum_status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'Enum Type',
    name: 'enum_type',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          enum_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'I 18 N Content',
    name: 'i18n_content',
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
            name: 'locale',
            displayName: 'locale',
          },
          {
            type: 'string',
            default: '',
            description: undefined,
            name: 'value',
            displayName: 'value',
          },
        ],
      },
    ],
    routing: {
      request: {
        body: {
          i18n_content: '={{$value.items}}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "content": "string",\n  "enum_status": 0,\n  "enum_type": 0,\n  "i18n_content": [\n    {\n      "locale": "string",\n      "value": "string"\n    }\n  ]\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Contacts Workforce Type'],
        operation: ['Update The Workforce Type'],
      },
    },
  },
]
/* eslint-disable */
