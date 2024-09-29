import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/chats/{chat_id}/members/is_in_chat',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Determine Whether A User Or Bot Is In A Group'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    description:
      'Group ID. For details, refer to [Group ID description]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Member'],
        operation: ['Determine Whether A User Or Bot Is In A Group'],
      },
    },
  },
]
/* eslint-disable */
