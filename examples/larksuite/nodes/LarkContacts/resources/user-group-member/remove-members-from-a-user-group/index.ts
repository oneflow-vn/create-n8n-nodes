import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Remove Members From A User Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Remove Members From A User Group',
  value: 'Remove Members From A User Group',
  action: 'Remove members from a user group',
  description:
    'This API is used to remove members from a user group (members can only be users currently, and can also be departments in the future). If the app\'s contact scope is "All employees", you can remove any member from any user group. If not, you can only remove members in the contact scope from the user groups in the contact scope. [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Remove members from a user group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/remove)',
  routing: {
    request: {
      method: 'POST',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/remove',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
