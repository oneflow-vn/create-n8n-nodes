import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create An Event'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create An Event',
  value: 'Create An Event',
  action: 'Create an event',
  description:
    'This API is used to create an event in a calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Create an event]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
