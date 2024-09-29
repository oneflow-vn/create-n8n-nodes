import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Attendance Results'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Attendance Results',
  value: 'Obtain Attendance Results',
  action: 'Obtain attendance results',
  description:
    'Obtains the actual attendance results of employees in the Company, including the clock-in/out result.\r\n\r\nAPI reference documentation: [Obtain attendance results]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_task/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_tasks/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
