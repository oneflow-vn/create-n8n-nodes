import { INodeProperties } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

/* eslint-disable */
export const properties: INodeProperties[] = [
  {
    displayName: 'GET /im/v1/chats/{chat_id}/announcement',
    name: 'operation',
    type: 'notice',
    typeOptions: {
      theme: 'info',
    },
    default: '',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Obtain Group Announcement Information'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    description:
      'The ID of the group with its announcement to be obtained. For details, refer to [Group ID description]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-id-description).',
    default: '',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Obtain Group Announcement Information'],
      },
    },
  },
]
/* eslint-disable */
