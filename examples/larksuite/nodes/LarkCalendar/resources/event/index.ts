import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as deleteAnEvent from './delete-an-event'
import * as obtainAnEvent from './obtain-an-event'
import * as updateAnEvent from './update-an-event'
import * as createAnEvent from './create-an-event'
import * as obtainEventList from './obtain-event-list'
import * as searchForEvents from './search-for-events'
import * as subscribeToEventChanges from './subscribe-to-event-changes'

const operations: INodePropertyOptions[] = [
  deleteAnEvent.option,
  obtainAnEvent.option,
  updateAnEvent.option,
  createAnEvent.option,
  obtainEventList.option,
  searchForEvents.option,
  subscribeToEventChanges.option,
]

export const name = 'Event'

/* eslint-disable */
const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Event'],
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
  ...deleteAnEvent.properties,
  ...obtainAnEvent.properties,
  ...updateAnEvent.properties,
  ...createAnEvent.properties,
  ...obtainEventList.properties,
  ...searchForEvents.properties,
  ...subscribeToEventChanges.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
