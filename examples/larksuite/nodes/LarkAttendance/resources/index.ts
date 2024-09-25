import { INodeProperties } from 'n8n-workflow'

import * as attendanceGroup from './attendance-group'
import * as attendanceShift from './attendance-shift'
import * as attendanceSchedule from './attendance-schedule'
import * as attendanceStatistics from './attendance-statistics'
import * as attendanceRecords from './attendance-records'
import * as attendanceCorrection from './attendance-correction'
import * as userSettings from './user-settings'
import * as files from './files'
import * as task from './task'

export const properties: INodeProperties[] = [
  ...attendanceGroup.properties,
  ...attendanceShift.properties,
  ...attendanceSchedule.properties,
  ...attendanceStatistics.properties,
  ...attendanceRecords.properties,
  ...attendanceCorrection.properties,
  ...userSettings.properties,
  ...files.properties,
  ...task.properties,
]
