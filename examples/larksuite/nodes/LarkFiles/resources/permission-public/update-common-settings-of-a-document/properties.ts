/* eslint-disable n8n-nodes-base/node-param-option-description-identical-to-name */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-display-name-miscased-id */
/* eslint-disable n8n-nodes-base/node-param-description-boolean-without-whether */
/* eslint-disable n8n-nodes-base/node-param-options-type-unsorted-items */

import { INodeProperties } from 'n8n-workflow'

// @ts-ignore
import * as helpers from '../../../helpers'

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
        resource: ['Permission Public'],
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
        resource: ['Permission Public'],
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
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
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
        useCustomBody: [true],
      },
      show: {
        resource: ['Permission Public'],
        operation: ['Update Common Settings Of A Document'],
      },
    },
  },
]
