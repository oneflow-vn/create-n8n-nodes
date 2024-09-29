import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Department'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Department',
  value: 'Delete A Department',
  action: 'Delete a department',
  description:
    'This API is used to delete a department from contacts. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Delete a department]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/departments/{{$parameter["department_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
