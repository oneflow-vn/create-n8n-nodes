import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as obtainStatisticsOfAFile from './obtain-statistics-of-a-file'

const operations: INodePropertyOptions[] = [obtainStatisticsOfAFile.option]

export const name = 'Statistics'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Statistics'],
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
  ...obtainStatisticsOfAFile.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
