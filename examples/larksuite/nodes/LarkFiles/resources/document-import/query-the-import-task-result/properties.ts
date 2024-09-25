import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/import_tasks/{ticket}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Query the import task result'],
      },
    },
  },
  {
    displayName: 'Ticket',
    name: 'ticket',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Query the import task result'],
      },
    },
  },
]
