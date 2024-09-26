import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as queryAvailability from './query-availability'

const operations: INodePropertyOptions[] = [queryAvailability.option]

export const name = 'Freebusy'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Freebusy'],
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
  ...queryAvailability.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
