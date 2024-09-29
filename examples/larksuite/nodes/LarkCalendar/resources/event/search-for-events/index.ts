import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search For Events'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search For Events',
  value: 'Search For Events',
  action: 'Search for events',
  description:
    'This API is used to search for events in a calendar as a user.\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Search for events]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/search)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/search',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
