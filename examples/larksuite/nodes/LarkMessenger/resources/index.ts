import { INodeProperties } from 'n8n-workflow'
import runhook from './hooks'

import * as message from './message'
import * as messageBuzzMessages from './message-buzz-messages'
import * as messageBatchMessage from './message-batch-message'
import * as messageImages from './message-images'
import * as messageFiles from './message-files'
import * as messageMessageCard from './message-message-card'
import * as messageMessageReaction from './message-message-reaction'
import * as group from './group'
import * as groupGroupMember from './group-group-member'
import * as groupGroupAnnouncement from './group-group-announcement'

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Message',
      value: 'Messenger Message',
    },
    {
      name: 'Message  Buzz messages',
      value: 'Messenger Message Message Buzz Messages',
    },
    {
      name: 'Message  Batch Message',
      value: 'Messenger Message Batch Message',
    },
    {
      name: 'Message  Images',
      value: 'Messenger Message Images',
    },
    {
      name: 'Message  Files',
      value: 'Messenger Message Files',
    },
    {
      name: 'Message  Message Card',
      value: 'Messenger Message Message Card',
    },
    {
      name: 'Message  Message Reaction',
      value: 'Messenger Message Message Reaction',
    },
    {
      name: 'Group',
      value: 'Messenger Group',
    },
    {
      name: 'Group  Group Member',
      value: 'Messenger Group Group Member',
    },
    {
      name: 'Group  Group Announcement',
      value: 'Messenger Group Group Announcement',
    },
  ],
  default: '',
}

const rawProperties: INodeProperties[] = [
  resourceSelect,
  ...message.properties,
  ...messageBuzzMessages.properties,
  ...messageBatchMessage.properties,
  ...messageImages.properties,
  ...messageFiles.properties,
  ...messageMessageCard.properties,
  ...messageMessageReaction.properties,
  ...group.properties,
  ...groupGroupMember.properties,
  ...groupGroupAnnouncement.properties,
]

const { properties } = runhook(rawProperties)

export { properties }
