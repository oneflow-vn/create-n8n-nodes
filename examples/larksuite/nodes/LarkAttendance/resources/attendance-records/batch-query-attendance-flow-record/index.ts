import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Batch Query Attendance Flow Record'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Batch Query Attendance Flow Record',
  value: 'Batch Query Attendance Flow Record',
  action: 'Batch query attendance flow record',
  description:
    'This API is used to batch query the actual attendance flow records of employees within your authorization scope. If the shift set by the company for an employee is clock-in at 9:00 am and clock-out at 6:00 pm and the employee punches in and out several times during this period, this API will return all attendance records.\r\n\r\nAPI reference documentation: [Batch query attendance flow record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_flows/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
