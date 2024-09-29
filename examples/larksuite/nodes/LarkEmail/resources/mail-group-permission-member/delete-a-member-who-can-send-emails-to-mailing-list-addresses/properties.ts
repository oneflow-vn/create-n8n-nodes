import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'DELETE /mail/v1/mailgroups/{mailgroup_id}/permission_members/{permission_member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete A Member Who Can Send Emails To Mailing List Addresses',
        ],
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
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete A Member Who Can Send Emails To Mailing List Addresses',
        ],
      },
    },
  },
  {
    displayName: 'Permission Member Id',
    name: 'permission_member_id',
    required: true,
    description: 'The unique ID of a member in this permission group',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Delete A Member Who Can Send Emails To Mailing List Addresses',
        ],
      },
    },
  },
]
/* eslint-disable */
