import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search For Calendars'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search For Calendars',
  value: 'Search For Calendars',
  action: 'Search for calendars',
  description:
    "This API is used to query public calendars or a user's primary calendar based on keywords.\r\n\r\nAPI reference documentation: [Search for calendars]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/search)",
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/search',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
