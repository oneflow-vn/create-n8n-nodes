import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/departments/{department_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Delete A Department'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    description:
      'Department ID, which must be consistent with department_id_type in the query parameter.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Delete A Department'],
      },
    },
  },
]
/* eslint-disable */
