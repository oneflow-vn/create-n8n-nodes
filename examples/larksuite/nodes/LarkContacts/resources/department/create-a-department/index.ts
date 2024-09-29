import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A Department'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A Department',
  value: 'Create A Department',
  action: 'Create a department',
  description:
    'This API is used to create a department in contacts. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Create a department]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/departments',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
