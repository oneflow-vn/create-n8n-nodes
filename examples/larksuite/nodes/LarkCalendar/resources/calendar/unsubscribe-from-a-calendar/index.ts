import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Unsubscribe From A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Unsubscribe From A Calendar',
  value: 'Unsubscribe From A Calendar',
  action: 'Unsubscribe from a calendar',
  description:
    'This API is used to unsubscribe from a calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Unsubscribe from a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/unsubscribe)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/unsubscribe',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
