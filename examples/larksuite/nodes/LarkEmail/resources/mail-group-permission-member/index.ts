import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createAMemberWhoCanSendEmailsToMailingListAddresses from './create-a-member-who-can-send-emails-to-mailing-list-addresses'
import * as obtainTheMembersWhoCanSendEmailsToMailingListAddressesInBatch from './obtain-the-members-who-can-send-emails-to-mailing-list-addresses-in-batch'
import * as obtainAMemberWhoCanSendEmailsToMailingListAddresses from './obtain-a-member-who-can-send-emails-to-mailing-list-addresses'
import * as deleteAMemberWhoCanSendEmailsToMailingListAddresses from './delete-a-member-who-can-send-emails-to-mailing-list-addresses'

const operations: INodePropertyOptions[] = [
  createAMemberWhoCanSendEmailsToMailingListAddresses.option,
  obtainTheMembersWhoCanSendEmailsToMailingListAddressesInBatch.option,
  obtainAMemberWhoCanSendEmailsToMailingListAddresses.option,
  deleteAMemberWhoCanSendEmailsToMailingListAddresses.option,
]

export const name = 'Mail Group Permission Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Mail Group Permission Member'],
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
  ...createAMemberWhoCanSendEmailsToMailingListAddresses.properties,
  ...obtainTheMembersWhoCanSendEmailsToMailingListAddressesInBatch.properties,
  ...obtainAMemberWhoCanSendEmailsToMailingListAddresses.properties,
  ...deleteAMemberWhoCanSendEmailsToMailingListAddresses.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
