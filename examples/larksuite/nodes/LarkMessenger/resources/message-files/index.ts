import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as uploadFiles from './upload-files'
import * as downloadFiles from './download-files'

const operations: INodePropertyOptions[] = [
  uploadFiles.option,
  downloadFiles.option,
]

export const name = 'Message  Files'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Files'],
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
  ...uploadFiles.properties,
  ...downloadFiles.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
