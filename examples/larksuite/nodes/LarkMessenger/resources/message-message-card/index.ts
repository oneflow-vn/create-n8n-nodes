import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as updateAppMessages from './update-app-messages'

const operations: INodePropertyOptions[] = [updateAppMessages.option]

export const name = 'Message  Message Card'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Messenger Message Message Card'],
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
  ...updateAppMessages.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
