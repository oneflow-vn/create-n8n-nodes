import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain User Id Via Email Or Mobile Number'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain User Id Via Email Or Mobile Number',
  value: 'Obtain User Id Via Email Or Mobile Number',
  action: 'Obtain user ID via email or mobile number',
  description:
    'This API is used to obtain user ID information via mobile number or email. The supported ID types are open_id, user_id, and union_id, which can be specified by using the query parameters.\r\n\r\nAPI reference documentation: [Obtain user ID via email or mobile number]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/batch_get_id)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/users/batch_get_id',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
