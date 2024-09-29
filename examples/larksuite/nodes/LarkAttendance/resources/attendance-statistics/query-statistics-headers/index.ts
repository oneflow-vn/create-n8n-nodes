import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Statistics Headers'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Statistics Headers',
  value: 'Query Statistics Headers',
  action: 'Query statistics headers',
  description:
    'Queries the statistics headers for daily or monthly statistics supported by the attendance statistics.\r\n\r\nAPI reference documentation: [Query statistics headers]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_field/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_fields/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
