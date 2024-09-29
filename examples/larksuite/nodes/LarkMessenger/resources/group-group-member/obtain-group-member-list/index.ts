import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Group Member List'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Group Member List',
  value: 'Obtain Group Member List',
  action: 'Obtain group member list',
  description:
    'If a user is in a group, the member list of this group is returned.\r\n\r\nAPI reference documentation: [Obtain group member list]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-members/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
