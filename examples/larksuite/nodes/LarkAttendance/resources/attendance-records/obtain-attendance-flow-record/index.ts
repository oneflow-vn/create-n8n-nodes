import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Attendance Flow Record'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Attendance Flow Record',
  value: 'Obtain Attendance Flow Record',
  action: 'Obtain attendance flow record',
  description:
    'Obtains user attendance flow record via the attendance record ID.\r\n\r\nAPI reference documentation: [Obtain attendance flow record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/attendance/v1/user_flows/{{$parameter["user_flow_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
