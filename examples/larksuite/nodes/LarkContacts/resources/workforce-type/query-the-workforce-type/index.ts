import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query The Workforce Type'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The Workforce Type',
  value: 'Query The Workforce Type',
  action: 'Query the workforce type',
  description:
    "This API is used to obtain an employee's workforce type.\r\n\r\nAPI reference documentation: [Query the workforce type]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/list)",
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/employee_type_enums',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
