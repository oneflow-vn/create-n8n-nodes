import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /contact/v3/group/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Delete A User Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description: 'ID of the user group to be deleted',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Delete A User Group'],
      },
    },
  },
]
/* eslint-disable */
