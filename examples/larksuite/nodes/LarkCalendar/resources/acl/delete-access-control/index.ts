import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Access Control'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Access Control',
  value: 'Delete Access Control',
  action: 'Delete access control',
  description:
    'This API is used to delete access control (i.e., calendar members) from a calendar as the current identity (user or app).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Delete access control]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls/{{$parameter["acl_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
