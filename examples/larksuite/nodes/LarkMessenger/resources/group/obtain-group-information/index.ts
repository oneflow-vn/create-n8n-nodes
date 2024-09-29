import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Group Information'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Group Information',
  value: 'Obtain Group Information',
  action: 'Obtain group information',
  description:
    'Obtains basic information such as group name, description, profile photo, and owner ID.\r\n\r\nAPI reference documentation: [Obtain group information]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/chat/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
