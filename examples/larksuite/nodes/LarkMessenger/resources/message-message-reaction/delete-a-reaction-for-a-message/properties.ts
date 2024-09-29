import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'DELETE /im/v1/messages/{message_id}/reactions/{reaction_id}',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Delete A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Message Id',
    name: 'message_id',
    required: true,
    description: 'Message ID of the reaction to be deleted',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Delete A Reaction For A Message'],
      },
    },
  },
  {
    displayName: 'Reaction Id',
    name: 'reaction_id',
    required: true,
    description: 'ID of the reaction to be deleted.',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Message Message Reaction'],
        operation: ['Delete A Reaction For A Message'],
      },
    },
  },
]
/* eslint-disable */
