import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Event List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Event List',
  value: 'Obtain Event List',
  action: 'Obtain event list',
  description:
    'This API is used to obtain the event list of a calendar as the current identity (app or user).\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Obtain event list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
