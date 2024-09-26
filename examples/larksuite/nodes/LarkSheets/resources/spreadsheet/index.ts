import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createSpreadsheet from './create-spreadsheet'

const operations: INodePropertyOptions[] = [createSpreadsheet.option]

export const name = 'spreadsheet'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Spreadsheet'],
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
  ...createSpreadsheet.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
