import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAGroup from './create-a-group'
import * as obtainTheListOfGroupsWithTheUserOrBot from './obtain-the-list-of-groups-with-the-user-or-bot'
import * as obtainGroupInformation from './obtain-group-information'
import * as updateGroupInformation from './update-group-information'
import * as deleteAGroup from './delete-a-group'
import * as searchForGroupsVisibleToAUserOrBot from './search-for-groups-visible-to-a-user-or-bot'
import * as obtainsTheGroupMemberSpeechScopes from './obtains-the-group-member-speech-scopes'
import * as updatesGroupSpeechScopes from './updates-group-speech-scopes'

const operations: INodePropertyOptions[] = [
  createAGroup.option,
  obtainTheListOfGroupsWithTheUserOrBot.option,
  obtainGroupInformation.option,
  updateGroupInformation.option,
  deleteAGroup.option,
  searchForGroupsVisibleToAUserOrBot.option,
  obtainsTheGroupMemberSpeechScopes.option,
  updatesGroupSpeechScopes.option,
]

export const name = 'Group'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Group'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...createAGroup.properties,
  ...obtainTheListOfGroupsWithTheUserOrBot.properties,
  ...obtainGroupInformation.properties,
  ...updateGroupInformation.properties,
  ...deleteAGroup.properties,
  ...searchForGroupsVisibleToAUserOrBot.properties,
  ...obtainsTheGroupMemberSpeechScopes.properties,
  ...updatesGroupSpeechScopes.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
