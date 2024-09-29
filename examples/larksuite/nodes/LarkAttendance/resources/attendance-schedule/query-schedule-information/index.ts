import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Schedule Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Schedule Information',
  value: 'Query Schedule Information',
  action: 'Query schedule information',
  description:
    "This API is used to query schedule information for multiple users. The query time span can't exceed 30 days.\r\n\r\nAPI reference documentation: [Query schedule information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_daily_shift/query)",
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_daily_shifts/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
