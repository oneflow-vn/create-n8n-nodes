import { INodeProperties } from 'n8n-workflow'

import * as user from './user'
import * as department from './department'
import * as userGroup from './user-group'
import * as userGroupMember from './user-group-member'
import * as unit from './unit'
import * as workforceType from './workforce-type'
import * as customUserFields from './custom-user-fields'
import * as contactScope from './contact-scope'

export const properties: INodeProperties[] = [
  ...user.properties,
  ...department.properties,
  ...userGroup.properties,
  ...userGroupMember.properties,
  ...unit.properties,
  ...workforceType.properties,
  ...customUserFields.properties,
  ...contactScope.properties,
]
