import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as searchShiftByName from './search-shift-by-name'
import * as obtainShiftDetails from './obtain-shift-details'
import * as deleteShift from './delete-shift'
import * as createShifts from './create-shifts'

const operations: INodePropertyOptions[] = [
  searchShiftByName.option,
  obtainShiftDetails.option,
  deleteShift.option,
  createShifts.option,
]

export const name = 'Attendance Shift'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Shift'],
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
  ...searchShiftByName.properties,
  ...obtainShiftDetails.properties,
  ...deleteShift.properties,
  ...createShifts.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
