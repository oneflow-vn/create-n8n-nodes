import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Calendar List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Calendar List',
  value: 'Obtain Calendar List',
  action: 'Obtain calendar list',
  description:
    'This API is used to obtain calendar list by pages under the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Obtain calendar list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
