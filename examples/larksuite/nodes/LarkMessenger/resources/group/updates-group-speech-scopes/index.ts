import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Updates Group Speech Scopes'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Updates Group Speech Scopes',
  value: 'Updates Group Speech Scopes',
  action: 'Updates group speech scopes',
  description:
    'Updates the settings of group speech scopes, which can be granted to all members, only admins, or only specified users.\r\n\r\nAPI reference documentation: [Updates group speech scopes]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-moderation/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/moderation',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
