import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A User Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A User Group',
  value: 'Delete A User Group',
  action: 'Delete a user group',
  description:
    'This API is used to delete a user group from a company. Note that the app\'s contact scope must be "All employees" so as to delete a user group. [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Delete a user group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
