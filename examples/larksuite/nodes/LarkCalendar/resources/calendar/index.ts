import { INodeProperties } from 'n8n-workflow'

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

export const name = 'Calendar'

export const properties: INodeProperties[] = [
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
