import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain Content Of A Specific Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain Content Of A Specific Message',
  value: 'Obtain Content Of A Specific Message',
  action: 'Obtain content of a specific message',
  description:
    'Query message content with message_id\r\n\r\nAPI reference documentation: [Obtain content of a specific message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
