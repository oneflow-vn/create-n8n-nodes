import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify Department Information In Part'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify Department Information In Part',
  value: 'Modify Department Information In Part',
  action: 'Modify department information in part',
  description:
    'This API is used to update any department field in contacts. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Modify department information in part]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
