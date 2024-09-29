import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Change Department Group To Common Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Change Department Group To Common Group',
  value: 'Change Department Group To Common Group',
  action: 'Change department group to common group',
  description:
    'Use this api to change department group to common group.\r\n\r\nAPI reference documentation: [Change department group to common group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/unbind_department_chat)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments/unbind_department_chat',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
