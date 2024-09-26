import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAPublicMailboxMember from './create-a-public-mailbox-member'
import * as obtainPublicMailboxMembersInBatch from './obtain-public-mailbox-members-in-batch'
import * as obtainPublicMailboxMemberInformation from './obtain-public-mailbox-member-information'
import * as deleteAPublicMailboxMember from './delete-a-public-mailbox-member'
import * as clearPublicMailboxMembers from './clear-public-mailbox-members'

const operations: INodePropertyOptions[] = [
  createAPublicMailboxMember.option,
  obtainPublicMailboxMembersInBatch.option,
  obtainPublicMailboxMemberInformation.option,
  deleteAPublicMailboxMember.option,
  clearPublicMailboxMembers.option,
]

export const name = 'Public Mailbox Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Public Mailbox Member'],
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
  ...createAPublicMailboxMember.properties,
  ...obtainPublicMailboxMembersInBatch.properties,
  ...obtainPublicMailboxMemberInformation.properties,
  ...deleteAPublicMailboxMember.properties,
  ...clearPublicMailboxMembers.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
