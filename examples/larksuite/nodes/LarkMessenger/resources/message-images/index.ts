import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as uploadImages from './upload-images'
import * as downloadImages from './download-images'

const operations: INodePropertyOptions[] = [
  uploadImages.option,
  downloadImages.option,
]

export const name = 'Message  Images'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Images'],
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
  ...uploadImages.properties,
  ...downloadImages.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
