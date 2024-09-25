import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'

import * as obtainTheListOfMembersOfGroupInviteesOfAnEvent from './obtain-the-list-of-members-of-group-invitees-of-an-event'

const operations: INodePropertyOptions[] = [
  obtainTheListOfMembersOfGroupInviteesOfAnEvent.option,
]

export const name = 'Event Attendee Chat Member'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Event Attendee Chat Member'],
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
  ...obtainTheListOfMembersOfGroupInviteesOfAnEvent.properties,
]
