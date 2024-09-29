import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtains The Group Member Speech Scopes'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtains The Group Member Speech Scopes',
  value: 'Obtains The Group Member Speech Scopes',
  action: 'Obtains the group member speech scopes',
  description:
    'Obtains the group speech mode, the list of users who can speak, and more\r\n\r\nAPI reference documentation: [Obtains the group member speech scopes]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-moderation/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/moderation',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
