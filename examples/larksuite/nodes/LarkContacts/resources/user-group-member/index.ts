import { INodeProperties } from 'n8n-workflow'

import * as addMembersToAUserGroup from './add-members-to-a-user-group'
import * as removeMembersFromAUserGroup from './remove-members-from-a-user-group'
import * as queryTheListOfMembersInAUserGroup from './query-the-list-of-members-in-a-user-group'

export const name = 'User Group Member'

export const properties: INodeProperties[] = [
  ...addMembersToAUserGroup.properties,
  ...removeMembersFromAUserGroup.properties,
  ...queryTheListOfMembersInAUserGroup.properties,
]
