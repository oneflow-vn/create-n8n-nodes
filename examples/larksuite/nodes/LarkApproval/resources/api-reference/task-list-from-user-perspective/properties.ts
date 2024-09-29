import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /approval/v4/tasks/query',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task List From User Perspective'],
      },
    },
  },
  {
    displayName: 'User Id',
    name: 'user_id',
    description: 'User ID to query',
    default: '',
    type: 'string',
    routing: {
      request: {
        qs: {
          user_id: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task List From User Perspective'],
      },
    },
  },
  {
    displayName: 'Topic',
    name: 'topic',
    description:
      'Topic of task group to query, such as "Pending", "Done", etc.',
    default: '1',
    type: 'number',
    routing: {
      request: {
        qs: {
          topic: '={{ $value }}',
        },
      },
    },
    displayOptions: {
      show: {
        resource: ['Approval API Reference'],
        operation: ['Task List From User Perspective'],
      },
    },
  },
]
/* eslint-disable */
