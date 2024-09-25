import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as createAMailingListMember from './create-a-mailing-list-member'
import * as obtainMailingListMembersInBatch from './obtain-mailing-list-members-in-batch'
import * as obtainMailingListMemberInformation from './obtain-mailing-list-member-information'
import * as deleteAMailingListMember from './delete-a-mailing-list-member'

const operations: INodePropertyOptions[] = [
  createAMailingListMember.option,
  obtainMailingListMembersInBatch.option,
  obtainMailingListMemberInformation.option,
  deleteAMailingListMember.option,
]

export const name = 'Mail Group Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Email Mail Group Member'],
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
  ...createAMailingListMember.properties,
  ...obtainMailingListMembersInBatch.properties,
  ...obtainMailingListMemberInformation.properties,
  ...deleteAMailingListMember.properties,
]
