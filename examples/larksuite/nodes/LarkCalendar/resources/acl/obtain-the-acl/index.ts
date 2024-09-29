import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The Acl'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The Acl',
  value: 'Obtain The Acl',
  action: 'Obtain the ACL',
  description:
    'This API is used to obtain the ACL of a calendar as the current identity (app or user).\n\nThe identity is determined by the token type of Authorization in the header.\r\n\r\nAPI reference documentation: [Obtain the ACL]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/calendar-acl/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/acls',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
