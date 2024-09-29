import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as batchQueryAttendanceFlowRecord from './batch-query-attendance-flow-record'
import * as obtainAttendanceFlowRecord from './obtain-attendance-flow-record'
import * as obtainAttendanceResults from './obtain-attendance-results'
import * as importAttendanceFlowRecord from './import-attendance-flow-record'

const operations: INodePropertyOptions[] = [
  batchQueryAttendanceFlowRecord.option,
  obtainAttendanceFlowRecord.option,
  obtainAttendanceResults.option,
  importAttendanceFlowRecord.option,
]

export const name = 'Attendance Records'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Records'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...batchQueryAttendanceFlowRecord.properties,
  ...obtainAttendanceFlowRecord.properties,
  ...obtainAttendanceResults.properties,
  ...importAttendanceFlowRecord.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
