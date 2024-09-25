import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /contact/v3/unit/{unit_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Modify unit information'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Modify unit information'],
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
        operation: ['Modify unit information'],
      },
    },
  },
]
