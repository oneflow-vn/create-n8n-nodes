import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query The List Of Members In A User Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The List Of Members In A User Group',
  value: 'Query The List Of Members In A User Group',
  action: 'Query the list of members in a user group',
  description:
    'This API is used to query the member list of a user group (members can only be users currently, and can also be departments in the future). If the app\'s contact scope is "All employees", you can query the member list of any user group in the company. If not, you can only query the member list of the user groups in the app\'s contact scope. [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Query the list of members in a user group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group-member/simplelist)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}/member/simplelist',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
