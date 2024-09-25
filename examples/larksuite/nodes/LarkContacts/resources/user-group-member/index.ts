import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as addMembersToAUserGroup from './add-members-to-a-user-group'
import * as removeMembersFromAUserGroup from './remove-members-from-a-user-group'
import * as queryTheListOfMembersInAUserGroup from './query-the-list-of-members-in-a-user-group'

const operations: INodePropertyOptions[] = [
  addMembersToAUserGroup.option,
  removeMembersFromAUserGroup.option,
  queryTheListOfMembersInAUserGroup.option,
]

export const name = 'User Group Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Contacts User Group User Group Member'],
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
  ...addMembersToAUserGroup.properties,
  ...removeMembersFromAUserGroup.properties,
  ...queryTheListOfMembersInAUserGroup.properties,
]
