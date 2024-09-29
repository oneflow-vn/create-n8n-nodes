import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Event Invitee List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Event Invitee List',
  value: 'Obtain Event Invitee List',
  action: 'Obtain event invitee list',
  description:
    'Obtains the invitee list of an event. If the event invitee list contains groups, call the [Obtain the list of members of group invitees]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list) API.\r\n\r\nAPI reference documentation: [Obtain event invitee list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
