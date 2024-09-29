import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain An Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain An Event',
  value: 'Obtain An Event',
  action: 'Obtain an event',
  description:
    'This API is used to obtain an event in a calendar as the current identity (app or user).\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Obtain an event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
