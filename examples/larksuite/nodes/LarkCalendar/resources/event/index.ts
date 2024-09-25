import { INodeProperties } from 'n8n-workflow'

import * as deleteAnEvent from './delete-an-event'
import * as obtainAnEvent from './obtain-an-event'
import * as updateAnEvent from './update-an-event'
import * as createAnEvent from './create-an-event'
import * as obtainEventList from './obtain-event-list'
import * as searchForEvents from './search-for-events'
import * as subscribeToEventChanges from './subscribe-to-event-changes'

export const name = 'Event'

export const properties: INodeProperties[] = [
  ...deleteAnEvent.properties,
  ...obtainAnEvent.properties,
  ...updateAnEvent.properties,
  ...createAnEvent.properties,
  ...obtainEventList.properties,
  ...searchForEvents.properties,
  ...subscribeToEventChanges.properties,
]
