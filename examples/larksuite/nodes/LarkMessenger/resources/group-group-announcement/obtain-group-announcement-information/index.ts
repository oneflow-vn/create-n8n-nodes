import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Group Announcement Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Group Announcement Information',
  value: 'Obtain Group Announcement Information',
  action: 'Obtain group announcement information',
  description:
    'Obtains the group announcement in a chat, with the same format as [Docs]({{document_base_url}}/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN).\r\n\r\nAPI reference documentation: [Obtain group announcement information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/announcement',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
