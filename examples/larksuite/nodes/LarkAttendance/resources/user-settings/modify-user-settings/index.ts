import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify User Settings'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify User Settings',
  value: 'Modify User Settings',
  action: 'Modify user settings',
  description:
    'Modifies the user settings of employees in your authorization scope, including face photo file IDs.\r\n\r\nAPI reference documentation: [Modify user settings]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/attendance-v1/user_setting/modify)',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_settings/modify',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
