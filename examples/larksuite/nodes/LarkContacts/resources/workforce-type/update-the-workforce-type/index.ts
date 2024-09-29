import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update The Workforce Type'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update The Workforce Type',
  value: 'Update The Workforce Type',
  action: 'Update the workforce type',
  description:
    'Update the custom workforce type\r\n\r\nAPI reference documentation: [Update the workforce type]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/employee_type_enums/{{$parameter["enum_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
