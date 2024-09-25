import { INodeProperties } from 'n8n-workflow'

import * as createAUserGroup from './create-a-user-group'
import * as updateAUserGroup from './update-a-user-group'
import * as deleteAUserGroup from './delete-a-user-group'
import * as queryAUserGroup from './query-a-user-group'
import * as queryTheListOfUserGroups from './query-the-list-of-user-groups'

export const name = 'User Group'

export const properties: INodeProperties[] = [
  ...createAUserGroup.properties,
  ...updateAUserGroup.properties,
  ...deleteAUserGroup.properties,
  ...queryAUserGroup.properties,
  ...queryTheListOfUserGroups.properties,
]
