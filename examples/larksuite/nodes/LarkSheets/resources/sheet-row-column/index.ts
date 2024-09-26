import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as rowsOrColumnsToMove from './rows-or-columns-to-move'

const operations: INodePropertyOptions[] = [rowsOrColumnsToMove.option]

export const name = 'Sheet  Row Column'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Sheet Row Column'],
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
  ...rowsOrColumnsToMove.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
