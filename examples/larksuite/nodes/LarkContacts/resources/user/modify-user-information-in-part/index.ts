import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Modify User Information In Part'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Modify User Information In Part',
  value: 'Modify User Information In Part',
  action: 'Modify user information in part',
  description:
    "This API is used to update a user's fields in Contacts. Parameters that are not specified will not be updated. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Modify user information in part]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/patch)",
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
