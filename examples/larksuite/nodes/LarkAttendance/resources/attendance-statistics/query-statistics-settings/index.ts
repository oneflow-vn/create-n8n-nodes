import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Statistics Settings'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Statistics Settings',
  value: 'Query Statistics Settings',
  action: 'Query statistics settings',
  description:
    'Queries the header settings of statistical report for daily statistics or monthly statistics customized by developers.\r\n\r\nAPI reference documentation: [Query statistics settings]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_views/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
