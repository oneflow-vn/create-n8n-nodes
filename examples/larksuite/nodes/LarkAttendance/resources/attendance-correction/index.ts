import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainCorrectionRecord from './obtain-correction-record'

const operations: INodePropertyOptions[] = [obtainCorrectionRecord.option]

export const name = 'Attendance Correction'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Correction'],
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
  ...obtainCorrectionRecord.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
