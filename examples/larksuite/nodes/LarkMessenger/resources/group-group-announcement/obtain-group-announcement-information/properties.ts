import { INodeProperties } from 'n8n-workflow'

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
        operation: ['Obtain group announcement information'],
      },
    },
  },
  {
    displayName: 'Chat Id',
    name: 'chat_id',
    required: true,
    default: 'oc_5ad11d72b830411d72b836c20',
    type: 'string',
    displayOptions: {
      show: {
        resource: ['Messenger Group Group Announcement'],
        operation: ['Obtain group announcement information'],
      },
    },
  },
]
