import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as deleteFilterConditions from './delete-filter-conditions'
import * as updateFilterConditions from './update-filter-conditions'
import * as obtainFilterConditions from './obtain-filter-conditions'
import * as queryFilterConditions from './query-filter-conditions'
import * as createAFilterCondition from './create-a-filter-condition'

const operations: INodePropertyOptions[] = [
  deleteFilterConditions.option,
  updateFilterConditions.option,
  obtainFilterConditions.option,
  queryFilterConditions.option,
  createAFilterCondition.option,
]

export const name = 'Filter condition  filter view'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Filter Condition Filter View'],
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
  ...deleteFilterConditions.properties,
  ...updateFilterConditions.properties,
  ...obtainFilterConditions.properties,
  ...queryFilterConditions.properties,
  ...createAFilterCondition.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
