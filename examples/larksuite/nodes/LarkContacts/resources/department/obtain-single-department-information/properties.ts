import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/departments/{department_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain Single Department Information'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    required: true,
    description: 'ID of the department to be obtained',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Department'],
        operation: ['Obtain Single Department Information'],
      },
    },
  },
]
/* eslint-disable */
