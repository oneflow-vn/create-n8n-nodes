import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain The Range Of Contacts Data That An App Can Access'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain The Range Of Contacts Data That An App Can Access',
  value: 'Obtain The Range Of Contacts Data That An App Can Access',
  action: 'Obtain the range of contacts data that an app can access',
  description:
    'This API is used to obtain the range of contacts data that an app is authorized to access, including the department list, user list, and user group list.\nIf the access range is all employees, all the first-level departments of the company will be returned. Otherwise, the departments that the administrator selected when setting the access range (excluding sub-departments of selected departments) will be returned.\r\n\r\nAPI reference documentation: [Obtain the range of contacts data that an app can access]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/scope/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/scopes',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
