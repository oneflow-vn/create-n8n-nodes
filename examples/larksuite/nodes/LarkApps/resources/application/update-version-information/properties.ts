import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
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
        operation: ['Update Version Information'],
      },
    },
  },
  {
    displayName: 'User Id Type',
    name: 'user_id_type',
    description:
      'User ID categories. Optional values: open_id, union_id, user_id',
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
        operation: ['Update Version Information'],
      },
    },
  },
  {
    displayName: 'Operator Id',
    name: 'operator_id',
    description: "Operator's open_id",
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
        operation: ['Update Version Information'],
      },
    },
  },
  {
    displayName: 'App Id',
    name: 'app_id',
    required: true,
    description: 'App ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['App Information Application'],
        operation: ['Update Version Information'],
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
        operation: ['Update Version Information'],
      },
    },
  },
  {
    displayName: 'Status',
    name: 'status',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          status: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['App Information Application'],
        operation: ['Update Version Information'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "status": 0\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['App Information Application'],
        operation: ['Update Version Information'],
      },
    },
  },
]
/* eslint-disable */
