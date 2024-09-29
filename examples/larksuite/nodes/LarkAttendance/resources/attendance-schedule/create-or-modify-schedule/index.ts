import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Or Modify Schedule'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Or Modify Schedule',
  value: 'Create Or Modify Schedule',
  action: 'Create or modify schedule',
  description:
    'A schedule describes the shifts that the employees in an attendance group are assigned to work each day. Currently, a schedule can be created for one or more people for a period of one full month.\r\n\r\nAPI reference documentation: [Create or modify schedule]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_daily_shift/batch_create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_daily_shifts/batch_create',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
