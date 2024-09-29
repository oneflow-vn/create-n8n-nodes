import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Connect An Exchange Account'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Connect An Exchange Account',
  value: 'Connect An Exchange Account',
  action: 'Connect an Exchange account',
  description:
    'This API is used to connect an Exchange account to a Lark account. After the connection is created, you can import calendar data from Exchange.\r\n\r\nAPI reference documentation: [Connect an Exchange account]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/exchange_bindings',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
