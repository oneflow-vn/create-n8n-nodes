import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create A User'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create A User',
  value: 'Create A User',
  action: 'Create a user',
  description:
    'This API is used to create a user in Contacts when a new employee is employed. After a user is created, only data within the data scope will be returned. For the relationship between data scopes and fields, refer to [App scopes]({{document_base_url}}/ukTMukTMukTM/uQjN3QjL0YzN04CN2cDN). [FAQs]({{document_base_url}}/ugTN1YjL4UTN24CO1UjN/uQzN1YjL0cTN24CN3UjN).\r\n\r\nAPI reference documentation: [Create a user]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/users',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
