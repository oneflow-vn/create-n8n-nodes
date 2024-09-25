import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as obtainFilter from './obtain-filter'
import * as createAFilter from './create-a-filter'
import * as updateAFilter from './update-a-filter'
import * as deleteAFilter from './delete-a-filter'

const operations: INodePropertyOptions[] = [
  obtainFilter.option,
  createAFilter.option,
  updateAFilter.option,
  deleteAFilter.option,
]

export const name = 'Sheet  Filter'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Docs Sheets Sheet Filter'],
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
  ...obtainFilter.properties,
  ...createAFilter.properties,
  ...updateAFilter.properties,
  ...deleteAFilter.properties,
]
