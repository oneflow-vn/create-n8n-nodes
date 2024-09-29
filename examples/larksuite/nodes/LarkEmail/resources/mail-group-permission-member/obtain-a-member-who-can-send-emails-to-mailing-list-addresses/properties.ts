import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName:
      'GET /mail/v1/mailgroups/{mailgroup_id}/permission_members/{permission_member_id}',
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
          'Obtain A Member Who Can Send Emails To Mailing List Addresses',
        ],
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
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Obtain A Member Who Can Send Emails To Mailing List Addresses',
        ],
      },
    },
  },
  {
    displayName: 'Permission Member Id',
    name: 'permission_member_id',
    required: true,
    description: 'Unique identifier of the member in the permissions group',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Email Mail Group Permission Member'],
        operation: [
          'Obtain A Member Who Can Send Emails To Mailing List Addresses',
        ],
      },
    },
  },
]
/* eslint-disable */
