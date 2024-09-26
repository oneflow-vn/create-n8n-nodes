import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as listRecords from './list-records'
import * as createARecord from './create-a-record'
import * as getRecords from './get-records'
import * as updateARecord from './update-a-record'
import * as deleteARecord from './delete-a-record'
import * as createRecords from './create-records'
import * as updateRecords from './update-records'
import * as deleteRecords from './delete-records'

const operations: INodePropertyOptions[] = [
  listRecords.option,
  createARecord.option,
  getRecords.option,
  updateARecord.option,
  deleteARecord.option,
  createRecords.option,
  updateRecords.option,
  deleteRecords.option,
]

export const name = 'record'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Bitable Record'],
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
  ...listRecords.properties,
  ...createARecord.properties,
  ...getRecords.properties,
  ...updateARecord.properties,
  ...deleteARecord.properties,
  ...createRecords.properties,
  ...updateRecords.properties,
  ...deleteRecords.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
