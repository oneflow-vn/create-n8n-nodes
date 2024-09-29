import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /drive/v1/import_tasks/{ticket}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Query The Import Task Result'],
      },
    },
  },
  {
    displayName: 'Ticket',
    name: 'ticket',
    required: true,
    description: 'ID of the import task',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Docs File Management Document Import'],
        operation: ['Query The Import Task Result'],
      },
    },
  },
]
/* eslint-disable */
