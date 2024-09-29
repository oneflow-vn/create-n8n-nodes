import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Determine Whether A User Or Bot Is In A Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Determine Whether A User Or Bot Is In A Group',
  value: 'Determine Whether A User Or Bot Is In A Group',
  action: 'Determine whether a user or bot is in a group',
  description:
    'Determines whether a user or bot is in a group based on their access_token.\r\n\r\nAPI reference documentation: [Determine whether a user or bot is in a group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/is_in_chat)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members/is_in_chat',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
