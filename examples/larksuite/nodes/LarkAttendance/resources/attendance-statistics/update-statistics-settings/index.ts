import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Statistics Settings'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Statistics Settings',
  value: 'Update Statistics Settings',
  action: 'Update statistics settings',
  description:
    'Updates the header settings of statistical report for daily statistics or monthly statistics customized by developers.\r\n\r\nAPI reference documentation: [Update statistics settings]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_stats_view/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/attendance/v1/user_stats_views/{{$parameter["user_stats_view_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
