import { INodeProperties } from 'n8n-workflow'

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

export const properties: INodeProperties[] = [
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
