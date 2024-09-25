import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/employee_type_enums/{enum_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Delete workforce types'],
      },
    },
  },
  {
    displayName: 'Enum Id',
    name: 'enum_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Delete workforce types'],
      },
    },
  },
]
