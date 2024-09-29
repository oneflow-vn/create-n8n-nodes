import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Shifts'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Shifts',
  value: 'Create Shifts',
  action: 'Create shifts',
  description:
    'Shift is a general term used to describe the time rules for an attendance task, such as how many attendances are required for a shift, on and off time of each attendance, how long is the attendance delay being considered as late, and how long is the attendance delay being considered as lack.\r\n\r\nAPI reference documentation: [Create shifts]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/shifts',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
