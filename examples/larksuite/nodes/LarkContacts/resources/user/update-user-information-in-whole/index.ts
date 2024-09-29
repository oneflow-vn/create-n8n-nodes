import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update User Information In Whole'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update User Information In Whole',
  value: 'Update User Information In Whole',
  action: 'Update user information in whole',
  description:
    "This API is used to update a user's fields in Contacts. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Update user information in whole]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/update)",
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
