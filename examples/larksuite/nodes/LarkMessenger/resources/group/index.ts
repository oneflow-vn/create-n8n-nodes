import { INodeProperties } from 'n8n-workflow'

import * as createAGroup from './create-a-group'
import * as obtainTheListOfGroupsWithTheUserOrBot from './obtain-the-list-of-groups-with-the-user-or-bot'
import * as obtainGroupInformation from './obtain-group-information'
import * as updateGroupInformation from './update-group-information'
import * as deleteAGroup from './delete-a-group'
import * as searchForGroupsVisibleToAUserOrBot from './search-for-groups-visible-to-a-user-or-bot'
import * as obtainsTheGroupMemberSpeechScopes from './obtains-the-group-member-speech-scopes'
import * as updatesGroupSpeechScopes from './updates-group-speech-scopes'

export const name = 'Group'

export const properties: INodeProperties[] = [
  ...createAGroup.properties,
  ...obtainTheListOfGroupsWithTheUserOrBot.properties,
  ...obtainGroupInformation.properties,
  ...updateGroupInformation.properties,
  ...deleteAGroup.properties,
  ...searchForGroupsVisibleToAUserOrBot.properties,
  ...obtainsTheGroupMemberSpeechScopes.properties,
  ...updatesGroupSpeechScopes.properties,
]
