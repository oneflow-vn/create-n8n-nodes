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

const resourceSelect: INodeProperties = {
  displayName: 'Resource',
  name: 'resource',
  type: 'options',
  noDataExpression: true,
  options: [
    {
      name: 'Attendance Group',
      value: 'Attendance Attendance Group',
    },
    {
      name: 'Attendance Shift',
      value: 'Attendance Attendance Shift',
    },
    {
      name: 'Attendance Schedule',
      value: 'Attendance Attendance Schedule',
    },
    {
      name: 'Attendance Statistics',
      value: 'Attendance Attendance Statistics',
    },
    {
      name: 'Attendance Records',
      value: 'Attendance Attendance Records',
    },
    {
      name: 'Attendance Correction',
      value: 'Attendance Attendance Correction',
    },
    {
      name: 'User Settings',
      value: 'Attendance User Settings',
    },
    {
      name: 'Files',
      value: 'Attendance Files',
    },
    {
      name: 'Task',
      value: 'Attendance Attendance（ Historical Version） API Reference Task',
    },
  ],
  default: '',
}

export const properties: INodeProperties[] = [
  resourceSelect,
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
