import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe To Event Changes'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Subscribe To Event Changes',
  value: 'Subscribe To Event Changes',
  action: 'Subscribe to event changes',
  description:
    'This API is used to subscribe to event changes in a calendar as a user.\r\n\r\nAPI reference documentation: [Subscribe to event changes]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-event/subscription)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/subscription',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
