import { INodeProperties } from 'n8n-workflow'

import * as createOrModifyAttendanceGroups from './create-or-modify-attendance-groups'
import * as obtainAttendanceGroupDetails from './obtain-attendance-group-details'
import * as deleteAttendanceGroup from './delete-attendance-group'

export const name = 'Attendance Group'

export const properties: INodeProperties[] = [
  ...createOrModifyAttendanceGroups.properties,
  ...obtainAttendanceGroupDetails.properties,
  ...deleteAttendanceGroup.properties,
]
