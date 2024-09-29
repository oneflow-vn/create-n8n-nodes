import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/unit/{unit_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Delete Units'],
      },
    },
  },
  {
    displayName: 'Unit Id',
    name: 'unit_id',
    required: true,
    description: 'unit id',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts Unit'],
        operation: ['Delete Units'],
      },
    },
  },
]
/* eslint-disable */
