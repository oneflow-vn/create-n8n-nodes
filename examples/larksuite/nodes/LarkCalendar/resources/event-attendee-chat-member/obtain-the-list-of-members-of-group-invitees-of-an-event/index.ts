import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The List Of Members Of Group Invitees Of An Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Members Of Group Invitees Of An Event',
  value: 'Obtain The List Of Members Of Group Invitees Of An Event',
  action: 'Obtain the list of members of group invitees of an event',
  description:
    'Obtains the list of members of group invitees of an event.\r\n\r\nAPI reference documentation: [Obtain the list of members of group invitees of an event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event-attendee-chat_member/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees/{{$parameter["attendee_id"]}}/chat_members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
