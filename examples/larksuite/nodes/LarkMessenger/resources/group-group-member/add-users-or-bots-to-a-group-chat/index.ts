import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add Users Or Bots To A Group Chat'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add Users Or Bots To A Group Chat',
  value: 'Add Users Or Bots To A Group Chat',
  action: 'Add users or bots to a group chat',
  description:
    'Adds users or bots into a group chat.\r\n\r\nAPI reference documentation: [Add users or bots to a group chat]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
