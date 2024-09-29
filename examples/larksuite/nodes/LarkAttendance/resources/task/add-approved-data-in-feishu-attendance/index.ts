import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add Approved Data In Feishu Attendance'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add Approved Data In Feishu Attendance',
  value: 'Add Approved Data In Feishu Attendance',
  action: 'Add Approved Data in Feishu Attendance',
  description:
    'API reference documentation: [Add Approved Data in Feishu Attendance]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/Attendance//AddApprovalsInLarkAttendance)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_approvals',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
