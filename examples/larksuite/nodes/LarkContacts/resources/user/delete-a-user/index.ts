import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A User'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A User',
  value: 'Delete A User',
  action: 'Delete a user',
  description:
    'This API is used to delete a user from Contacts when an employee is terminated. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Delete a user]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
