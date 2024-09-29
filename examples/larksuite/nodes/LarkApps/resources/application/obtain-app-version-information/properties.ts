import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Obtain App Version Information'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    description: 'Language of app information',
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
        operation: ['Obtain App Version Information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    description:
      'App\'s app_id. To query the version information of other apps, you must request the [Obtain app version information]({{document_base_url}}/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN) scope. To only query the version information of this app, enter "me" or the app_id.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain App Version Information'],
      },
    },
  },
  {
    displayName: 'Version Id',
    name: 'version_id',
    required: true,
    description: 'ID that uniquely identifies the app version',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain App Version Information'],
      },
    },
  },
]
/* eslint-disable */
