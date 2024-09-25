import { INodeProperties } from 'n8n-workflow'

import * as createAccessControl from './create-access-control'
import * as obtainTheAcl from './obtain-the-acl'
import * as deleteAccessControl from './delete-access-control'
import * as subscribeToChangesInCalendarAccessControl from './subscribe-to-changes-in-calendar-access-control'

export const name = 'ACL'

export const properties: INodeProperties[] = [
  ...createAccessControl.properties,
  ...obtainTheAcl.properties,
  ...deleteAccessControl.properties,
  ...subscribeToChangesInCalendarAccessControl.properties,
]
