import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /mail/v1/mailgroups/{mailgroup_id}/members',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Member'],
        operation: ['Obtain Mailing List Members In Batch'],
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
        operation: ['Obtain Mailing List Members In Batch'],
      },
    },
  },
]
/* eslint-disable */
