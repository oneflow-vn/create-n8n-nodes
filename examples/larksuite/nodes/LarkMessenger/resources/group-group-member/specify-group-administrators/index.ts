import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Specify Group Administrators'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Specify Group Administrators',
  value: 'Specify Group Administrators',
  action: 'Specify group administrators',
  description:
    'Specifies users or bots as the group administrators.\r\n\r\nAPI reference documentation: [Specify group administrators]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-managers/add_managers)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/managers/add_managers',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
