import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Import Attendance Flow Record'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Import Attendance Flow Record',
  value: 'Import Attendance Flow Record',
  action: 'Import attendance flow record',
  description:
    "Imports the attendance flow record of authorized employees. After the import, the final attendance status and result can be calculated according to the shift rules of the employee's attendance group.\r\n\r\nAPI reference documentation: [Import attendance flow record]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_flow/batch_create)",
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_flows/batch_create',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
