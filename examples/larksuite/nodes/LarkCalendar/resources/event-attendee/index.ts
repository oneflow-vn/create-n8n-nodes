import { INodeProperties } from 'n8n-workflow'

import * as createEventInvitees from './create-event-invitees'
import * as obtainEventInviteeList from './obtain-event-invitee-list'
import * as deleteEventInvitees from './delete-event-invitees'

export const name = 'Event Attendee'

export const properties: INodeProperties[] = [
  ...createEventInvitees.properties,
  ...obtainEventInviteeList.properties,
  ...deleteEventInvitees.properties,
]
