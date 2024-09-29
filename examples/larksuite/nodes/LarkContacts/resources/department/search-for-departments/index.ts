import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search For Departments'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search For Departments',
  value: 'Search For Departments',
  action: 'Search for departments',
  description:
    'This API is used to search for department data with keywords. Department visibility is set by administrators in Admin. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Search for departments]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/search)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments/search',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
