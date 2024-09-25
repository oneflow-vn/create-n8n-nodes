import { INodeProperties } from 'n8n-workflow'

import * as addUsersOrBotsToAGroupChat from './add-users-or-bots-to-a-group-chat'
import * as removeUsersOrBotsFromAGroupChat from './remove-users-or-bots-from-a-group-chat'
import * as obtainGroupMemberList from './obtain-group-member-list'
import * as usersOrBotsJoinAGroupChatVoluntarily from './users-or-bots-join-a-group-chat-voluntarily'
import * as determineWhetherAUserOrBotIsInAGroup from './determine-whether-a-user-or-bot-is-in-a-group'
import * as specifyGroupAdministrators from './specify-group-administrators'
import * as deleteGroupAdministrators from './delete-group-administrators'

export const name = 'Group  Group Member'

export const properties: INodeProperties[] = [
  ...addUsersOrBotsToAGroupChat.properties,
  ...removeUsersOrBotsFromAGroupChat.properties,
  ...obtainGroupMemberList.properties,
  ...usersOrBotsJoinAGroupChatVoluntarily.properties,
  ...determineWhetherAUserOrBotIsInAGroup.properties,
  ...specifyGroupAdministrators.properties,
  ...deleteGroupAdministrators.properties,
]
