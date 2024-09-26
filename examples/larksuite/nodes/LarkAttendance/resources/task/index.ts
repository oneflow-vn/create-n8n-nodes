import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getUserAttendanceData from './get-user-attendance-data'
import * as addApprovedDataInFeishuAttendance from './add-approved-data-in-feishu-attendance'

const operations: INodePropertyOptions[] = [
  getUserAttendanceData.option,
  addApprovedDataInFeishuAttendance.option,
]

export const name = 'Task'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: [
        'Attendance Attendance（ Historical Version） API Reference Task',
      ],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...getUserAttendanceData.properties,
  ...addApprovedDataInFeishuAttendance.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
