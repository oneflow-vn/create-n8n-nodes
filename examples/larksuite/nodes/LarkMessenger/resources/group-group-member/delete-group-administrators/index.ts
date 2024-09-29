import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete Group Administrators'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete Group Administrators',
  value: 'Delete Group Administrators',
  action: 'Delete group administrators',
  description:
    'Deletes the specified group admins (users or bots)\r\n\r\nAPI reference documentation: [Delete group administrators]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/delete_managers)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/managers/delete_managers',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
