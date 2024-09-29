import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Users Or Bots Join A Group Chat Voluntarily'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Users Or Bots Join A Group Chat Voluntarily',
  value: 'Users Or Bots Join A Group Chat Voluntarily',
  action: 'Users or bots join a group chat voluntarily.',
  description:
    'Users or bots join a group chat voluntarily.\r\n\r\nAPI reference documentation: [Users or bots join a group chat voluntarily.]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/me_join)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members/me_join',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
