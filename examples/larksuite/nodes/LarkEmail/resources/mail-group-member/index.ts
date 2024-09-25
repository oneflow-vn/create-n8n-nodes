import { INodeProperties } from 'n8n-workflow'

import * as createAMailingListMember from './create-a-mailing-list-member'
import * as obtainMailingListMembersInBatch from './obtain-mailing-list-members-in-batch'
import * as obtainMailingListMemberInformation from './obtain-mailing-list-member-information'
import * as deleteAMailingListMember from './delete-a-mailing-list-member'

export const name = 'Mail Group Member'

export const properties: INodeProperties[] = [
  ...createAMailingListMember.properties,
  ...obtainMailingListMembersInBatch.properties,
  ...obtainMailingListMemberInformation.properties,
  ...deleteAMailingListMember.properties,
]
