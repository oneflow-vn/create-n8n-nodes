import { INodeProperties } from 'n8n-workflow'

import * as queryScheduleInformation from './query-schedule-information'
import * as createOrModifySchedule from './create-or-modify-schedule'

export const name = 'Attendance Schedule'

export const properties: INodeProperties[] = [
  ...queryScheduleInformation.properties,
  ...createOrModifySchedule.properties,
]
