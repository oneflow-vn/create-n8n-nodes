import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Reply To Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Reply To Messages',
  value: 'Reply To Messages',
  action: 'Reply to messages',
  description:
    'Replies to a specific message, with text, rich text, cards, group cards, name cards, images, videos, audios, files, and emojis supported.\r\n\r\nAPI reference documentation: [Reply to messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/reply)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reply',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
