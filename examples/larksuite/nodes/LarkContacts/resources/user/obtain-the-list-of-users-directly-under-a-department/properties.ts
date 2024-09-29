import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/users/find_by_department',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Obtain The List Of Users Directly Under A Department'],
      },
    },
  },
  {
    displayName: 'Department Id',
    name: 'department_id',
    description:
      'The department under which users are to be obtained. This field is required. The department ID of root department is 0.',
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
        resource: ['Contacts User'],
        operation: ['Obtain The List Of Users Directly Under A Department'],
      },
    },
  },
]
/* eslint-disable */
