import { INodeProperties } from 'n8n-workflow'

import * as listAllTables from './list-all-tables'
import * as createTable from './create-table'
import * as batchCreateTable from './batch-create-table'
import * as deleteTable from './delete-table'
import * as batchDeleteTable from './batch-delete-table'

export const name = 'Table'

export const properties: INodeProperties[] = [
  ...listAllTables.properties,
  ...createTable.properties,
  ...batchCreateTable.properties,
  ...deleteTable.properties,
  ...batchDeleteTable.properties,
]
