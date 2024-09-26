import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAMailingListAlias from './create-a-mailing-list-alias'
import * as obtainAllMailingListAliases from './obtain-all-mailing-list-aliases'
import * as deleteAMailingListAlias from './delete-a-mailing-list-alias'

const operations: INodePropertyOptions[] = [
  createAMailingListAlias.option,
  obtainAllMailingListAliases.option,
  deleteAMailingListAlias.option,
]

export const name = 'Mail Group Alias'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Mail Group Alias'],
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
  ...createAMailingListAlias.properties,
  ...obtainAllMailingListAliases.properties,
  ...deleteAMailingListAlias.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
