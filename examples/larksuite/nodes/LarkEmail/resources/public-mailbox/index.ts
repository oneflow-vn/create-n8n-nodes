import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAPublicMailbox from './create-a-public-mailbox'
import * as obtainPublicMailboxesInBatch from './obtain-public-mailboxes-in-batch'
import * as obtainAPublicMailbox from './obtain-a-public-mailbox'
import * as modifyAPublicMailbox from './modify-a-public-mailbox'
import * as updateAPublicMailbox from './update-a-public-mailbox'

const operations: INodePropertyOptions[] = [
  createAPublicMailbox.option,
  obtainPublicMailboxesInBatch.option,
  obtainAPublicMailbox.option,
  modifyAPublicMailbox.option,
  updateAPublicMailbox.option,
]

export const name = 'Public Mailbox'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Public Mailbox'],
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
  ...createAPublicMailbox.properties,
  ...obtainPublicMailboxesInBatch.properties,
  ...obtainAPublicMailbox.properties,
  ...modifyAPublicMailbox.properties,
  ...updateAPublicMailbox.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
