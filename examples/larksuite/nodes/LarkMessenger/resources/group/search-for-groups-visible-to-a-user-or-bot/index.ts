import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search For Groups Visible To A User Or Bot'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Search For Groups Visible To A User Or Bot',
  value: 'Search For Groups Visible To A User Or Bot',
  action: 'Search for groups visible to a user or bot',
  description:
    'Searches for the list of groups visible to a user or bot, including the groups that the user or bot is in, and groups that are open to the user or bot.\nThe group information that can be obtained include group ID (chat_id), group name, and group description.\r\n\r\nAPI reference documentation: [Search for groups visible to a user or bot]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/search)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/search',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
