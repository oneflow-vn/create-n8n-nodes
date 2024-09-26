import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as uploadAFile from './upload-a-file'
import * as downloadAFile from './download-a-file'
import * as deleteAFile from './delete-a-file'

const operations: INodePropertyOptions[] = [
  uploadAFile.option,
  downloadAFile.option,
  deleteAFile.option,
]

export const name = 'File'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs File Management File'],
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
  ...uploadAFile.properties,
  ...downloadAFile.properties,
  ...deleteAFile.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
