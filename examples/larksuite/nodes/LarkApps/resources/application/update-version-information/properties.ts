import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'PATCH /application/v6/applications/{app_id}/app_versions/{version_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update version information'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update version information'],
      },
    },
  },
  {
    displayName: 'Operator Id',
    name: 'operator_id',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          operator_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update version information'],
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
        operation: ['Update version information'],
      },
    },
  },
  {
    displayName: 'Version Id',
    name: 'version_id',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update version information'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'number',
    default: 0,
    routing: {
      request: {
        body: {
          status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update version information'],
      },
    },
  },
]
