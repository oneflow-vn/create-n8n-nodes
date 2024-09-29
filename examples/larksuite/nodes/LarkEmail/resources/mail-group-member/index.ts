import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

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

/* eslint-disable */
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
/* eslint-disable */

// overwrite the options of the operationSelect
operationSelect.options = operations

// set the default operation
operationSelect.default = operations.length > 0 ? operations[0].value : ''

export const rawProperties: INodeProperties[] = [
  operationSelect,
  ...createAMailingListMember.properties,
  ...obtainMailingListMembersInBatch.properties,
  ...obtainMailingListMemberInformation.properties,
  ...deleteAMailingListMember.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
