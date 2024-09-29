import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Remove Users Or Bots From A Group Chat'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Remove Users Or Bots From A Group Chat',
  value: 'Remove Users Or Bots From A Group Chat',
  action: 'Remove users or bots from a group chat',
  description:
    'Removes users or bots from a group chat.\r\n\r\nAPI reference documentation: [Remove users or bots from a group chat]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
