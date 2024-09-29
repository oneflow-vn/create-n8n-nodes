import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /contact/v3/group/{group_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Query A User Group'],
      },
    },
  },
  {
    displayName: 'Group Id',
    name: 'group_id',
    required: true,
    description: 'User group ID',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Contacts User Group'],
        operation: ['Query A User Group'],
      },
    },
  },
]
/* eslint-disable */
