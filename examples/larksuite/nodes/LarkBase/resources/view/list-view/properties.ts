import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /bitable/v1/apps/{app_token}/tables/{table_id}/views',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List View'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'Bitable app token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List View'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'Table id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable View'],
        operation: ['List View'],
      },
    },
  },
]
/* eslint-disable */
