import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Parent Department Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Parent Department Information',
  value: 'Obtain Parent Department Information',
  action: 'Obtain parent department information',
  description:
    'This API is used to recursively obtain the information of parent departments, and return the list of the information of parent departments within the permission scope from child departments to parent departments. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Obtain parent department information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/parent)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/departments/parent',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
