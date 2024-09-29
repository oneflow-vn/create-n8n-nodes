import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query The Connection Status'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The Connection Status',
  value: 'Query The Connection Status',
  action: 'Query the connection status',
  description:
    'This API is used to query the connection status of an Exchange account, as well as whether calendar data is synced from Exchange.\r\n\r\nAPI reference documentation: [Query the connection status]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/calendar-v4/exchange_binding/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/exchange_bindings/{{$parameter["exchange_binding_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
