import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Shift'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Shift',
  value: 'Delete Shift',
  action: 'Delete shift',
  description:
    'Deletes a shift via shift ID.\r\n\r\nAPI reference documentation: [Delete shift]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/shift/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/attendance/v1/shifts/{{$parameter["shift_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
