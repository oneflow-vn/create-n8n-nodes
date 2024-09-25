import { INodeProperties } from 'n8n-workflow'

import * as batchQueryAttendanceFlowRecord from './batch-query-attendance-flow-record'
import * as obtainAttendanceFlowRecord from './obtain-attendance-flow-record'
import * as obtainAttendanceResults from './obtain-attendance-results'
import * as importAttendanceFlowRecord from './import-attendance-flow-record'

export const name = 'Attendance Records'

export const properties: INodeProperties[] = [
  ...batchQueryAttendanceFlowRecord.properties,
  ...obtainAttendanceFlowRecord.properties,
  ...obtainAttendanceResults.properties,
  ...importAttendanceFlowRecord.properties,
]
