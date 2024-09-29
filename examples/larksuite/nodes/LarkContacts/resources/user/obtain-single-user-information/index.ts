import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Single User Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Single User Information',
  value: 'Obtain Single User Information',
  action: 'Obtain single user information',
  description:
    'This API is used to obtain the information of a single user in Contacts. [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Obtain single user information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
