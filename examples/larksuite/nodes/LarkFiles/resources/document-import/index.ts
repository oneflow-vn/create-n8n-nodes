import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAnImportTask from './create-an-import-task'
import * as queryTheImportTaskResult from './query-the-import-task-result'

const operations: INodePropertyOptions[] = [
  createAnImportTask.option,
  queryTheImportTaskResult.option,
]

export const name = 'document import'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management Document Import'],
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
  ...createAnImportTask.properties,
  ...queryTheImportTaskResult.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
