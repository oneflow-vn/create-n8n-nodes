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
    displayName: 'POST /drive/v1/files/upload_prepare',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Multipart Upload Files'],
        operation: ['Upload A File In Blocks Pre Uploading'],
      },
    },
  },
  {
    displayName: 'File Name',
    name: 'file_name',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          file_name: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Multipart Upload Files'],
        operation: ['Upload A File In Blocks Pre Uploading'],
      },
    },
  },
  {
    displayName: 'Parent Node',
    name: 'parent_node',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          parent_node: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Multipart Upload Files'],
        operation: ['Upload A File In Blocks Pre Uploading'],
      },
    },
  },
  {
    displayName: 'Parent Type',
    name: 'parent_type',
    type: 'string',
    default: '',
    description: undefined,
    routing: {
      request: {
        body: {
          parent_type: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Multipart Upload Files'],
        operation: ['Upload A File In Blocks Pre Uploading'],
      },
    },
  },
  {
    displayName: 'Size',
    name: 'size',
    type: 'number',
    default: 0,
    description: undefined,
    routing: {
      request: {
        body: {
          size: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      hide: {
        useCustomBody: [true],
      },
      show: {
        resource: ['Multipart Upload Files'],
        operation: ['Upload A File In Blocks Pre Uploading'],
      },
    },
  },
]
