import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/departments/{department_id}/children',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain The List Of Subdepartments'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    description: 'Department ID. The root department ID is 0.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain The List Of Subdepartments'],
      },
    },
  },
]
/* eslint-disable */
