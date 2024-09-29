import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'PATCH /drive/v1/permissions/{token}/public',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
    description:
      'Type of the permission object, for example, `?type\n\n\ndrive.v1.enum.TokenType.option.Wiki.desc=$$$Wiki node (Partially supported)',
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
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
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
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Comment Entity',
    name: 'comment_entity',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          comment_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'External Access',
    name: 'external_access',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          external_access: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Invite External',
    name: 'invite_external',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          invite_external: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Link Share Entity',
    name: 'link_share_entity',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          link_share_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Lock Switch',
    name: 'lock_switch',
    type: 'boolean',
    default: true,
    description: undefined,
    routing: {
      request: {
        body: {
          lock_switch: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Security Entity',
    name: 'security_entity',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          security_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Share Entity',
    name: 'share_entity',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          share_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        '/options.useCustomBody': [true],
      },
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
  {
    displayName: 'Custom Body',
    name: 'customBody',
    type: 'json',
    default:
      '{\n  "comment_entity": "string",\n  "external_access": true,\n  "invite_external": true,\n  "link_share_entity": "string",\n  "lock_switch": true,\n  "security_entity": "string",\n  "share_entity": "string"\n}',
    description: 'Custom body to send.',
    routing: {
      send: {
        preSend: [helpers.hooks.preSendActionCustonBody],
      },
    },
    displayOptions: {
      show: {
        '/options.useCustomBody': [true],
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
]
/* eslint-disable */
