import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Department Information In Whole'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Department Information In Whole',
  value: 'Update Department Information In Whole',
  action: 'Update department information in whole',
  description:
    'This API is used to update all information of the current department. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Update department information in whole]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
