import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query A User Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query A User Group',
  value: 'Query A User Group',
  action: 'Query a user group',
  description:
    'This API is used to query the basic information of a user group by user group ID. Make sure that the app\'s contact scope includes the user group or is "All employees". [Click to learn about the range of contacts data that an app can access]({{document_base_url}}/ukTMukTMukTM/uETNz4SM1MjLxUzM/v3/guides/scope_authority).\r\n\r\nAPI reference documentation: [Query a user group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/group/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
