import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search Shift By Name'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search Shift By Name',
  value: 'Search Shift By Name',
  action: 'Search shift by name',
  description:
    'Searches the shift information by the name of the shift.\r\n\r\nAPI reference documentation: [Search shift by name]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/shifts/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
