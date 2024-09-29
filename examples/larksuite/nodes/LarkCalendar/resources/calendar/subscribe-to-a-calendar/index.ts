import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe To A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Subscribe To A Calendar',
  value: 'Subscribe To A Calendar',
  action: 'Subscribe to a calendar',
  description:
    'This API is used to subscribe to a calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Subscribe to a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscribe)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/subscribe',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
