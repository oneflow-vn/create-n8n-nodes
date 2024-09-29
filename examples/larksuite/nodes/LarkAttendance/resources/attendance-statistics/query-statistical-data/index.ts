import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query Statistical Data'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query Statistical Data',
  value: 'Query Statistical Data',
  action: 'Query statistical data',
  description:
    'Queries statistical data for daily or monthly statistics.\r\n\r\nAPI reference documentation: [Query statistical data]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_data/query)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_datas/query',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
