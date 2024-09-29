import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Primary Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get Primary Calendar',
  value: 'Get Primary Calendar',
  action: 'Get primary calendar',
  description:
    'Get the primary calendar information for the current identity.\r\n\r\nAPI reference documentation: [Get primary calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/primary)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/primary',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
