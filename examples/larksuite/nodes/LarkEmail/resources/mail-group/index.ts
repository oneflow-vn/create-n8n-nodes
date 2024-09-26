import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAMailingList from './create-a-mailing-list'
import * as obtainMailingListsInBatch from './obtain-mailing-lists-in-batch'
import * as obtainAMailingList from './obtain-a-mailing-list'
import * as modifyAMailingList from './modify-a-mailing-list'
import * as updateAMailingList from './update-a-mailing-list'
import * as deleteAMailingList from './delete-a-mailing-list'

const operations: INodePropertyOptions[] = [
  createAMailingList.option,
  obtainMailingListsInBatch.option,
  obtainAMailingList.option,
  modifyAMailingList.option,
  updateAMailingList.option,
  deleteAMailingList.option,
]

export const name = 'Mail Group'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Mail Group'],
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
  ...createAMailingList.properties,
  ...obtainMailingListsInBatch.properties,
  ...obtainAMailingList.properties,
  ...modifyAMailingList.properties,
  ...updateAMailingList.properties,
  ...deleteAMailingList.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
