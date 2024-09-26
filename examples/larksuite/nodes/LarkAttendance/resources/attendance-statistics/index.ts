import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as queryStatisticsHeaders from './query-statistics-headers'
import * as queryStatisticsSettings from './query-statistics-settings'
import * as updateStatisticsSettings from './update-statistics-settings'
import * as queryStatisticalData from './query-statistical-data'

const operations: INodePropertyOptions[] = [
  queryStatisticsHeaders.option,
  queryStatisticsSettings.option,
  updateStatisticsSettings.option,
  queryStatisticalData.option,
]

export const name = 'Attendance Statistics'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Attendance Statistics'],
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
  ...queryStatisticsHeaders.properties,
  ...queryStatisticsSettings.properties,
  ...updateStatisticsSettings.properties,
  ...queryStatisticalData.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
