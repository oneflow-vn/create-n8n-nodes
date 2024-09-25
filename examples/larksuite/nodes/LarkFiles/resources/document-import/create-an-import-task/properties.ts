import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'POST /drive/v1/import_tasks',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
  {
    displayName: 'File Extension',
    name: 'file_extension',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_extension: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
  {
    displayName: 'File Token',
    name: 'file_token',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          file_token: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
  {
    displayName: 'Point',
    name: 'point',
    type: 'json',
    default: '{}',
    routing: {
      request: {
        body: {
          point: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Create an import task'],
      },
    },
  },
]
