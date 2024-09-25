import { INodeProperties } from 'n8n-workflow'

import * as createAPublicMailboxMember from './create-a-public-mailbox-member'
import * as obtainPublicMailboxMembersInBatch from './obtain-public-mailbox-members-in-batch'
import * as obtainPublicMailboxMemberInformation from './obtain-public-mailbox-member-information'
import * as deleteAPublicMailboxMember from './delete-a-public-mailbox-member'
import * as clearPublicMailboxMembers from './clear-public-mailbox-members'

export const name = 'Public Mailbox Member'

export const properties: INodeProperties[] = [
  ...createAPublicMailboxMember.properties,
  ...obtainPublicMailboxMembersInBatch.properties,
  ...obtainPublicMailboxMemberInformation.properties,
  ...deleteAPublicMailboxMember.properties,
  ...clearPublicMailboxMembers.properties,
]
