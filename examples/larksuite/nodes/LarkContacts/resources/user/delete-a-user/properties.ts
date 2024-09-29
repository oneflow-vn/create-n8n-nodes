import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/users/{user_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Delete A User'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    required: true,
    description:
      'User ID, which must match the user_id_type in the query parameter.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User'],
        operation: ['Delete A User'],
      },
    },
  },
]
/* eslint-disable */
