import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Send Messages',
  value: 'Send Messages',
  action: 'Send messages',
  description:
    'Sends messages to a specific user or chat, with text, rich text, interactive [message cards]({{document_base_url}}/ukTMukTMukTM/uczM3QjL3MzN04yNzcDN), group cards, name cards, images, videos, audios, files, and emojis supported.\r\n\r\nAPI reference documentation: [Send messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
