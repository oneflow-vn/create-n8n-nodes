import { INodeProperties } from 'n8n-workflow'

import * as getUserAttendanceData from './get-user-attendance-data'
import * as addApprovedDataInFeishuAttendance from './add-approved-data-in-feishu-attendance'

export const name = 'Task'

export const properties: INodeProperties[] = [
  ...getUserAttendanceData.properties,
  ...addApprovedDataInFeishuAttendance.properties,
]
