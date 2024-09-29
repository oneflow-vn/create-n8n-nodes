import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/departments/parent',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain Parent Department Information'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    description: 'Department ID',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          department_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain Parent Department Information'],
      },
    },
  },
]
/* eslint-disable */
