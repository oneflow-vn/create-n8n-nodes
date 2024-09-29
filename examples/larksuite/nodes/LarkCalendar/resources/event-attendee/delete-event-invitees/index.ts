import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Event Invitees'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Event Invitees',
  value: 'Delete Event Invitees',
  action: 'Delete event invitees',
  description:
    'Deletes event invitees from an event in batch.\r\n\r\nAPI reference documentation: [Delete event invitees]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/batch_delete)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees/batch_delete',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
