import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Shift Details'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Shift Details',
  value: 'Obtain Shift Details',
  action: 'Obtain shift details',
  description:
    'Obtains shift details via shift ID.\r\n\r\nAPI reference documentation: [Obtain shift details]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/shifts/{{$parameter["shift_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
