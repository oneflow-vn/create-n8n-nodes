import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/unit/{unit_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain Unit Information'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    required: true,
    description: 'Unit ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain Unit Information'],
      },
    },
  },
]
/* eslint-disable */
