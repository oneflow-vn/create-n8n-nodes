import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /application/v6/applications/{app_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update app category information'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          lang: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update app category information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update app category information'],
      },
    },
  },
  {
    displayName: 'Common Categories',
    name: 'common_categories',
    type: 'json',
    default: '[\n  null\n]',
    routing: {
      request: {
        body: {
          common_categories: '={{ JSON.parse($value) }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update app category information'],
      },
    },
  },
]
