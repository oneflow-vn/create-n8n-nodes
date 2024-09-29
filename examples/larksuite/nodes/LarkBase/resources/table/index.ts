import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as listAllTables from './list-all-tables'
import * as createTable from './create-table'
import * as batchCreateTable from './batch-create-table'
import * as deleteTable from './delete-table'
import * as batchDeleteTable from './batch-delete-table'

const operations: INodePropertyOptions[] = [
  listAllTables.option,
  createTable.option,
  batchCreateTable.option,
  deleteTable.option,
  batchDeleteTable.option,
]

export const name = 'Table'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Bitable Table'],
    },
  },
  default: '',
}
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...listAllTables.properties,
  ...createTable.properties,
  ...batchCreateTable.properties,
  ...deleteTable.properties,
  ...batchDeleteTable.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
