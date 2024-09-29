import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PUT /drive/v1/permissions/{token}/members/{member_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    description:
      'Type of the file, for example, `?type\n\n\ndrive.v1.permission.member.method.update.path.prop.member_id.string.example=$$$ou_7dab8a3d3cdcc9da365777c7ad535d62',
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
        operation: ['Updates Permissions Of A Collaborator'],
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
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Member Id',
    name: 'member_id',
    required: true,
    description:
      'ID of the member for whom you need to update the permissions. This field corresponds to the `member_type` field.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Member Type',
    name: 'member_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          member_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Perm',
    name: 'perm',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          perm: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default: '{\n  "member_type": "string",\n  "perm": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Permission Permission Member'],
        operation: ['Updates Permissions Of A Collaborator'],
      },
    },
  },
]
/* eslint-disable */
