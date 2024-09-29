import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Group Announcement Info'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Group Announcement Info',
  value: 'Update Group Announcement Info',
  action: 'Update group announcement info',
  description:
    'Updates the group announcement information in a chat, with the same format as [Docs]({{document_base_url}}/ukTMukTMukTM/uAzM5YjLwMTO24CMzkjN).\r\n\r\nAPI reference documentation: [Update group announcement info]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat-announcement/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/announcement',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
