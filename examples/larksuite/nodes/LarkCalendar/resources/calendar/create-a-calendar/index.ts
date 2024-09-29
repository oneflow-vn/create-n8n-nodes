import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Calendar',
  value: 'Create A Calendar',
  action: 'Create a calendar',
  description:
    'This API is used to create a shared calendar for the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Create a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
