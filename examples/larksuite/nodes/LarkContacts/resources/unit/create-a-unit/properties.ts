import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /contact/v3/unit',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create a unit'],
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
        resource: ['Contacts Unit'],
        operation: ['Create a unit'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          unit_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create a unit'],
      },
    },
  },
  {
    displayName: 'Unit Type',
    name: 'unit_type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          unit_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Create a unit'],
      },
    },
  },
]
