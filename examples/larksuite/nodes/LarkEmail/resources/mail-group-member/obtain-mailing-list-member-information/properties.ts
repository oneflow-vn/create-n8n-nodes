import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /mail/v1/mailgroups/{mailgroup_id}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Obtain Mailing List Member Information'],
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
        resource: ['Email Mail Group Member'],
        operation: ['Obtain Mailing List Member Information'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    description: 'Unique identifier of the member in the mailing list',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Obtain Mailing List Member Information'],
      },
    },
  },
]
/* eslint-disable */
