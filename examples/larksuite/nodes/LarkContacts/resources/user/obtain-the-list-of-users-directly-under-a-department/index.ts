import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The List Of Users Directly Under A Department'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The List Of Users Directly Under A Department',
  value: 'Obtain The List Of Users Directly Under A Department',
  action: 'Obtain the list of users directly under a department',
  description:
    'This API is used to obtain the list of users directly under a department based on the department ID.\n[FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Obtain the list of users directly under a department]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/find_by_department)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/users/find_by_department',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
