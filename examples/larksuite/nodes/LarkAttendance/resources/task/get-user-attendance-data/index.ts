import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get User Attendance Data'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get User Attendance Data',
  value: 'Get User Attendance Data',
  action: 'Get User Attendance Data',
  description:
    'API reference documentation: [Get User Attendance Data]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/Attendance//RetrieveUserApprovals)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_approvals/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
