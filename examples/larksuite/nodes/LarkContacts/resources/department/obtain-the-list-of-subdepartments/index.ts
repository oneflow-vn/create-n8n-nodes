import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The List Of Subdepartments'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Subdepartments',
  value: 'Obtain The List Of Subdepartments',
  action: 'Obtain the list of sub-departments',
  description:
    'This API is used to obtain the list of sub-departments by using the department ID. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Obtain the list of sub-departments]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/children)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}/children',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
