import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Disconnect An Exchange Account'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Disconnect An Exchange Account',
  value: 'Disconnect An Exchange Account',
  action: 'Disconnect an Exchange account',
  description:
    'This API is used to disconnect an Exchange account from a Lark account. The Exchange account can be connected to other Lark accounts only after it is disconnected.\r\n\r\nAPI reference documentation: [Disconnect an Exchange account]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/exchange_bindings/{{$parameter["exchange_binding_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
