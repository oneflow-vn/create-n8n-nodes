import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createOrModifyAttendanceGroups from './create-or-modify-attendance-groups'
import * as obtainAttendanceGroupDetails from './obtain-attendance-group-details'
import * as deleteAttendanceGroup from './delete-attendance-group'

const operations: INodePropertyOptions[] = [
  createOrModifyAttendanceGroups.option,
  obtainAttendanceGroupDetails.option,
  deleteAttendanceGroup.option,
]

export const name = 'Attendance Group'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Group'],
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
  ...createOrModifyAttendanceGroups.properties,
  ...obtainAttendanceGroupDetails.properties,
  ...deleteAttendanceGroup.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
