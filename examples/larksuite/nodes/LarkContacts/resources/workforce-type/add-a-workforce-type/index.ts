import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add A Workforce Type'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add A Workforce Type',
  value: 'Add A Workforce Type',
  action: 'Add a workforce type',
  description:
    'This API is used to add a workforce type.\r\n\r\nAPI reference documentation: [Add a workforce type]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/employee_type_enum/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/employee_type_enums',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
