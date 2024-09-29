import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /bitable/v1/apps/{app_token}/tables/{table_id}/records/{record_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Delete A Record'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'bitable app_token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Delete A Record'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'table_id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Delete A Record'],
      },
    },
  },
  {
    displayName: 'Record Id',
    name: 'record_id',
    required: true,
    description: 'record_id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Record'],
        operation: ['Delete A Record'],
      },
    },
  },
]
/* eslint-disable */
