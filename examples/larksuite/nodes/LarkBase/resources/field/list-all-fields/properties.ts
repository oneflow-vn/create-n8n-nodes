import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /bitable/v1/apps/{app_token}/tables/{table_id}/fields',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['List All Fields'],
      },
    },
  },
  {
    displayName: 'App Token',
    name: 'app_token',
    required: true,
    description: 'bitable app token',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['List All Fields'],
      },
    },
  },
  {
    displayName: 'Table Id',
    name: 'table_id',
    required: true,
    description: 'table id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs Bitable Field'],
        operation: ['List All Fields'],
      },
    },
  },
]
/* eslint-disable */
