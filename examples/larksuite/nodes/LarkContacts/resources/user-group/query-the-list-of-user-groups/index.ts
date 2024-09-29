import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query The List Of User Groups'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The List Of User Groups',
  value: 'Query The List Of User Groups',
  action: 'Query the list of user groups',
  description:
    'This API is used to query the user group list of a company. If the app\'s contact scope is "All employees", you can obtain all user groups in the company. If not, you can only obtain the user groups in the app\'s contact scope. [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Query the list of user groups]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/simplelist)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/simplelist',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
