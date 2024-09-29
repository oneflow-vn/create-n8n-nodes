import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as addAReactionForAMessage from './add-a-reaction-for-a-message'
import * as obtainAReactionForAMessage from './obtain-a-reaction-for-a-message'
import * as deleteAReactionForAMessage from './delete-a-reaction-for-a-message'

const operations: INodePropertyOptions[] = [
  addAReactionForAMessage.option,
  obtainAReactionForAMessage.option,
  deleteAReactionForAMessage.option,
]

export const name = 'Message  Message Reaction'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Message Reaction'],
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
  ...addAReactionForAMessage.properties,
  ...obtainAReactionForAMessage.properties,
  ...deleteAReactionForAMessage.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
