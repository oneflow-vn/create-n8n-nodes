import { INodeProperties, INodePropertyOptions } from 'n8n-workflow'
import runHooks from './hooks'

import * as getPrimaryCalendar from './get-primary-calendar'
import * as createACalendar from './create-a-calendar'
import * as obtainCalendarList from './obtain-calendar-list'
import * as deleteACalendar from './delete-a-calendar'
import * as obtainACalendar from './obtain-a-calendar'
import * as updateACalendar from './update-a-calendar'
import * as searchForCalendars from './search-for-calendars'
import * as subscribeToACalendar from './subscribe-to-a-calendar'
import * as unsubscribeFromACalendar from './unsubscribe-from-a-calendar'
import * as subscribeToCalendarChangeEvents from './subscribe-to-calendar-change-events'

const operations: INodePropertyOptions[] = [
  getPrimaryCalendar.option,
  createACalendar.option,
  obtainCalendarList.option,
  deleteACalendar.option,
  obtainACalendar.option,
  updateACalendar.option,
  searchForCalendars.option,
  subscribeToACalendar.option,
  unsubscribeFromACalendar.option,
  subscribeToCalendarChangeEvents.option,
]

export const name = 'Calendar'

const operationSelect: INodeProperties = {
  displayName: 'Operation',
  name: 'operation',
  type: 'options',
  noDataExpression: true,
  displayOptions: {
    show: {
      resource: ['Calendar Calendar'],
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
  ...getPrimaryCalendar.properties,
  ...createACalendar.properties,
  ...obtainCalendarList.properties,
  ...deleteACalendar.properties,
  ...obtainACalendar.properties,
  ...updateACalendar.properties,
  ...searchForCalendars.properties,
  ...subscribeToACalendar.properties,
  ...unsubscribeFromACalendar.properties,
  ...subscribeToCalendarChangeEvents.properties,
]

const { properties, methods } = runHooks(rawProperties)

export { properties, methods }
