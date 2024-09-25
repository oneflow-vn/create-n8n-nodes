import { INodeProperties } from 'n8n-workflow'

import * as createAPublicMailbox from './create-a-public-mailbox'
import * as obtainPublicMailboxesInBatch from './obtain-public-mailboxes-in-batch'
import * as obtainAPublicMailbox from './obtain-a-public-mailbox'
import * as modifyAPublicMailbox from './modify-a-public-mailbox'
import * as updateAPublicMailbox from './update-a-public-mailbox'

export const name = 'Public Mailbox'

export const properties: INodeProperties[] = [
  ...createAPublicMailbox.properties,
  ...obtainPublicMailboxesInBatch.properties,
  ...obtainAPublicMailbox.properties,
  ...modifyAPublicMailbox.properties,
  ...updateAPublicMailbox.properties,
]
