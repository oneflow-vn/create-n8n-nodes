import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /application/v6/applications/{app_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain Apps Information'],
      },
    },
  },
  {
    displayName: 'Lang',
    name: 'lang',
    description:
      'Specifies the language in which the app information is obtained',
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
        operation: ['Obtain Apps Information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    description:
      'App\'s app_id. To query the information of other apps, you must request the [Obtain apps information]({{document_base_url}}/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN) scope. To only query the information of this app, enter "me" or the app_id.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Obtain Apps Information'],
      },
    },
  },
]
/* eslint-disable */
