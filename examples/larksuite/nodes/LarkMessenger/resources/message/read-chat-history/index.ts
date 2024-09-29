import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Read Chat History'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Read Chat History',
  value: 'Read Chat History',
  action: 'Read chat history',
  description:
    'Obtains chat history (chat records) of chats (including private chats and group chats).\r\n\r\nAPI reference documentation: [Read chat history]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
