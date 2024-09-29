import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Group'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Group',
  value: 'Delete A Group',
  action: 'Delete a group',
  description:
    'Deletes a group.\r\n\r\nAPI reference documentation: [Delete a group]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
