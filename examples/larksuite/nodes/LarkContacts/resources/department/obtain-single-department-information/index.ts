import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Single Department Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Single Department Information',
  value: 'Obtain Single Department Information',
  action: 'Obtain single department information',
  description:
    'This API is used to obtain the information of a single department in contacts. For details, refer to [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Obtain single department information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
