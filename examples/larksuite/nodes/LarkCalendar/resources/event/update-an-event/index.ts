import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update An Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update An Event',
  value: 'Update An Event',
  action: 'Update an event',
  description:
    'This API is used to update an event in a calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Update an event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
