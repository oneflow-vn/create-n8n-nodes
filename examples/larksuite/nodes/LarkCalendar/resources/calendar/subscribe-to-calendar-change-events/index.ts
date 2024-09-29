import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe To Calendar Change Events'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Subscribe To Calendar Change Events',
  value: 'Subscribe To Calendar Change Events',
  action: 'Subscribe to calendar change events',
  description:
    'This API is used to subscribe to all changes in the calendars under the current identity as a user.\r\n\r\nAPI reference documentation: [Subscribe to calendar change events]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/subscription)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/subscription',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
