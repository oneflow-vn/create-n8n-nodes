import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as uploadFiles from './upload-files'

const operations: INodePropertyOptions[] = [uploadFiles.option]

export const name = 'Files'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Attendance Files'],
    },
  },
  default: '',
}

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const properties: INodeProperties[] = [
  operationSelect,
  ...uploadFiles.properties,
]
