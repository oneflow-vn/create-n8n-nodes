import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as createEventInvitees from './create-event-invitees'
import * as obtainEventInviteeList from './obtain-event-invitee-list'
import * as deleteEventInvitees from './delete-event-invitees'

const operations: INodePropertyOptions[] = [
  createEventInvitees.option,
  obtainEventInviteeList.option,
  deleteEventInvitees.option,
]

export const name = 'Event Attendee'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Event Attendee'],
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
  ...createEventInvitees.properties,
  ...obtainEventInviteeList.properties,
  ...deleteEventInvitees.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
