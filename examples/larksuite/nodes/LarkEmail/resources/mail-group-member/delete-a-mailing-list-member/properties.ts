import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /mail/v1/mailgroups/{mailgroup_id}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Delete A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Mailgroup Id',
    name: 'mailgroup_id',
    required: true,
    description: 'The unique ID or email address of a mail group',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Delete A Mailing List Member'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    description: 'The unique ID of a member in this mail group',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Delete A Mailing List Member'],
      },
    },
  },
]
/* eslint-disable */
