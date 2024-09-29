import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /drive/v1/permissions/{token}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    description:
      'The type of file, placed in the query parameter, e.g.`?type = doc`',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Member Type',
    name: 'member_type',
    description:
      'Type of the member for whom you need to delete the permissions, for example, `?member_type\n\n\ndrive.v1.permission.member.method.delete.query.prop.type.desc=$$$Type of the file, for example, `?type=doc`. This field is included in the query parameters.',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          member_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Token',
    name: 'token',
    required: true,
    description:
      'Token of the file. For more information about how to obtain the token, see [Overview]({{document_base_url}}/ukTMukTMukTM/uUDN04SN0QjL1QDN/files/guide/introduction).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    description:
      'ID of the member for whom you need to delete the permissions. This field corresponds to the `member_type` field.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Delete Permissions Of A Collaborator'],
      },
    },
  },
]
/* eslint-disable */
