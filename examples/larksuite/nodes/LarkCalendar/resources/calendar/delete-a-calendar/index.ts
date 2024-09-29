import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Calendar',
  value: 'Delete A Calendar',
  action: 'Delete a calendar',
  description:
    'This API is used to delete a shared calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Delete a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
