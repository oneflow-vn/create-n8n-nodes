import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Access Control'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Access Control',
  value: 'Create Access Control',
  action: 'Create access control',
  description:
    'This API is used to add access control (i.e., calendar members) to a calendar as the current identity (user or app).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Create access control]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
