import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Update the workforce type'],
      },
    },
  },
  {
    displayName: 'Enum Id',
    name: 'enum_id',
    required: true,
    default:
      'exGeIjow7zIqWMy+ONkFxA\n\n\ncontact.v3.type.i18n_content.prop.locale.string.example=$$$zh_cn',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update the workforce type'],
      },
    },
  },
  {
    displayName: 'Content',
    name: 'content',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          content: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update the workforce type'],
      },
    },
  },
  {
    displayName: 'Enum Status',
    name: 'enum_status',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          enum_status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update the workforce type'],
      },
    },
  },
  {
    displayName: 'Enum Type',
    name: 'enum_type',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          enum_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update the workforce type'],
      },
    },
  },
  {
    displayName: 'I 18 N Content',
    name: 'i18n_content',
    type: 'json',
    default: '[\n  {}\n]',
    routing: {
      request: {
        body: {
          i18n_content: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Update the workforce type'],
      },
    },
  },
]