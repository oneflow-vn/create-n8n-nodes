import { INodeProperties } from 'n8n-workflow'

export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /application/v6/applications/{app_id}/app_versions/{version_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain app version information'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    default: 'zh_cn',
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
        operation: ['Obtain app version information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    default: 'cli_9f3ca975326b501b',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain app version information'],
      },
    },
  },
  {
    displayName: 'Version Id',
    name: 'version_id',
    required: true,
    default: 'oav_d317f090b7258ad0372aa53963cda70d',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain app version information'],
      },
    },
  },
]
