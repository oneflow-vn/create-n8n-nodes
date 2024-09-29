import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/unit/list_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain The List Of Departments Associated With A Unit'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    description: 'Unit ID',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          unit_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Obtain The List Of Departments Associated With A Unit'],
      },
    },
  },
]
/* eslint-disable */
