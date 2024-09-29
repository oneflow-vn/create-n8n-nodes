import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Calendar',
  value: 'Obtain A Calendar',
  action: 'Obtain a calendar',
  description:
    'This API is used to obtain calendar information by calendar ID as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Obtain a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
