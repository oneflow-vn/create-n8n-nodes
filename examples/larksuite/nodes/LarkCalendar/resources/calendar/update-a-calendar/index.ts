import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update A Calendar'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update A Calendar',
  value: 'Update A Calendar',
  action: 'Update a calendar',
  description:
    'This API is used to modify calendar information as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Update a calendar]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
