import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAPublicMailboxAlias from './create-a-public-mailbox-alias'
import * as obtainAllPublicMailboxAliases from './obtain-all-public-mailbox-aliases'
import * as deleteAPublicMailboxAlias from './delete-a-public-mailbox-alias'

const operations: INodePropertyOptions[] = [
  createAPublicMailboxAlias.option,
  obtainAllPublicMailboxAliases.option,
  deleteAPublicMailboxAlias.option,
]

export const name = 'Public Mailbox Alias'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Public Mailbox Alias'],
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
  ...createAPublicMailboxAlias.properties,
  ...obtainAllPublicMailboxAliases.properties,
  ...deleteAPublicMailboxAlias.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
