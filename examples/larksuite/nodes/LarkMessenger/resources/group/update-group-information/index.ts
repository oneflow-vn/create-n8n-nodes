import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update Group Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update Group Information',
  value: 'Update Group Information',
  action: 'Update group information',
  description:
    'Updates the group profile photo, name, description, and configuration, or assigns new group owner.\r\n\r\nAPI reference documentation: [Update group information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/update)',
  routing: {
    request: {
      method: 'PUT',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
