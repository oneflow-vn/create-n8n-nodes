import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/unit/list_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain the list of departments associated with a unit'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          unit_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain the list of departments associated with a unit'],
      },
    },
  },
]
