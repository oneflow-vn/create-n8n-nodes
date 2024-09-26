import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as addUsersOrBotsToAGroupChat from './add-users-or-bots-to-a-group-chat'
import * as removeUsersOrBotsFromAGroupChat from './remove-users-or-bots-from-a-group-chat'
import * as obtainGroupMemberList from './obtain-group-member-list'
import * as usersOrBotsJoinAGroupChatVoluntarily from './users-or-bots-join-a-group-chat-voluntarily'
import * as determineWhetherAUserOrBotIsInAGroup from './determine-whether-a-user-or-bot-is-in-a-group'
import * as specifyGroupAdministrators from './specify-group-administrators'
import * as deleteGroupAdministrators from './delete-group-administrators'

const operations: INodePropertyOptions[] = [
  addUsersOrBotsToAGroupChat.option,
  removeUsersOrBotsFromAGroupChat.option,
  obtainGroupMemberList.option,
  usersOrBotsJoinAGroupChatVoluntarily.option,
  determineWhetherAUserOrBotIsInAGroup.option,
  specifyGroupAdministrators.option,
  deleteGroupAdministrators.option,
]

export const name = 'Group  Group Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Group Group Member'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...addUsersOrBotsToAGroupChat.properties,
  ...removeUsersOrBotsFromAGroupChat.properties,
  ...obtainGroupMemberList.properties,
  ...usersOrBotsJoinAGroupChatVoluntarily.properties,
  ...determineWhetherAUserOrBotIsInAGroup.properties,
  ...specifyGroupAdministrators.properties,
  ...deleteGroupAdministrators.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
