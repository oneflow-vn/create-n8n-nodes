import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/employee_type_enums/{enum_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Delete Workforce Types'],
      },
    },
  },
  {
    displayName: 'Enum Id',
    name: 'enum_id',
    required: true,
    description: 'Enum ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Workforce Type'],
        operation: ['Delete Workforce Types'],
      },
    },
  },
]
/* eslint-disable */
