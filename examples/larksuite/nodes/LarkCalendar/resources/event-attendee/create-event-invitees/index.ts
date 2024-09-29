import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Event Invitees'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Event Invitees',
  value: 'Create Event Invitees',
  action: 'Create event invitees\n',
  description:
    'Adds event invitees to an event in batch.\r\n\r\nAPI reference documentation: [Create event invitees\n]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
