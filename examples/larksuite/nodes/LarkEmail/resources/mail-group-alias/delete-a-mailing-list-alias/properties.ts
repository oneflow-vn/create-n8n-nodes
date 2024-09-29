import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /mail/v1/mailgroups/{mailgroup_id}/aliases/{alias_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Delete A Mailing List Alias'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    description: 'Mailing list ID or mailing list address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Delete A Mailing List Alias'],
      },
    },
  },
  {
    displayName: 'Alias Id',
    name: 'alias_id',
    required: true,
    description: 'Mailing list alias email address',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Alias'],
        operation: ['Delete A Mailing List Alias'],
      },
    },
  },
]
/* eslint-disable */
