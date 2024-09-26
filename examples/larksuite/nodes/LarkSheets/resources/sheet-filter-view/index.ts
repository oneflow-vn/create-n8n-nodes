import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as deleteFilterView from './delete-filter-view'
import * as updateFilterView from './update-filter-view'
import * as obtainFilterView from './obtain-filter-view'
import * as queryFilterView from './query-filter-view'
import * as createFilterView from './create-filter-view'

const operations: INodePropertyOptions[] = [
  deleteFilterView.option,
  updateFilterView.option,
  obtainFilterView.option,
  queryFilterView.option,
  createFilterView.option,
]

export const name = 'Sheet  Filter view'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Sheet Filter View'],
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
  ...deleteFilterView.properties,
  ...updateFilterView.properties,
  ...obtainFilterView.properties,
  ...queryFilterView.properties,
  ...createFilterView.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
