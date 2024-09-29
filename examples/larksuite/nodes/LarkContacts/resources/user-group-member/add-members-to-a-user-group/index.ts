import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add Members To A User Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add Members To A User Group',
  value: 'Add Members To A User Group',
  action: 'Add members to a user group',
  description:
    'This API is used to add members to a user group (members can only be users currently, and can also be departments in the future). If the app\'s contact scope is "All employees", you can add any member to any user group. If not, you can only add members in the contact scope to the user groups in the contact scope. [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Add members to a user group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/add)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/add',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
