import { INodeProperties } from 'n8n-workflow'

import * as addAReactionForAMessage from './add-a-reaction-for-a-message'
import * as obtainAReactionForAMessage from './obtain-a-reaction-for-a-message'
import * as deleteAReactionForAMessage from './delete-a-reaction-for-a-message'

export const name = 'Message  Message Reaction'

export const properties: INodeProperties[] = [
  ...addAReactionForAMessage.properties,
  ...obtainAReactionForAMessage.properties,
  ...deleteAReactionForAMessage.properties,
]
