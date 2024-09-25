import { INodeProperties } from 'n8n-workflow'

import * as createAMemberWhoCanSendEmailsToMailingListAddresses from './create-a-member-who-can-send-emails-to-mailing-list-addresses'
import * as obtainTheMembersWhoCanSendEmailsToMailingListAddressesInBatch from './obtain-the-members-who-can-send-emails-to-mailing-list-addresses-in-batch'
import * as obtainAMemberWhoCanSendEmailsToMailingListAddresses from './obtain-a-member-who-can-send-emails-to-mailing-list-addresses'
import * as deleteAMemberWhoCanSendEmailsToMailingListAddresses from './delete-a-member-who-can-send-emails-to-mailing-list-addresses'

export const name = 'Mail Group Permission Member'

export const properties: INodeProperties[] = [
  ...createAMemberWhoCanSendEmailsToMailingListAddresses.properties,
  ...obtainTheMembersWhoCanSendEmailsToMailingListAddressesInBatch.properties,
  ...obtainAMemberWhoCanSendEmailsToMailingListAddresses.properties,
  ...deleteAMemberWhoCanSendEmailsToMailingListAddresses.properties,
]
