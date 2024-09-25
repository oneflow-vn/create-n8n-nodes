import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Type',
    name: 'type',
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
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Token',
    name: 'token',
    required: true,
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Comment Entity',
    name: 'comment_entity',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          comment_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'External Access',
    name: 'external_access',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          external_access: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Invite External',
    name: 'invite_external',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          invite_external: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Link Share Entity',
    name: 'link_share_entity',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          link_share_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Lock Switch',
    name: 'lock_switch',
    type: 'boolean',
    default: true,
    routing: {
      request: {
        body: {
          lock_switch: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Security Entity',
    name: 'security_entity',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          security_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
  {
    displayName: 'Share Entity',
    name: 'share_entity',
    type: 'string',
    default: '',
    routing: {
      request: {
        body: {
          share_entity: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Docs File Management Permission Permission Public'],
        operation: ['Update common settings of a document'],
      },
    },
  },
]
