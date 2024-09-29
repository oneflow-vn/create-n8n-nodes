import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send Buzz Text Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Send Buzz Text Messages',
  value: 'Send Buzz Text Messages',
  action: 'Send buzz text messages',
  description:
    'Performs in-app and text message buzz on the specified message.\r\n\r\nAPI reference documentation: [Send buzz text messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_sms)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_sms',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
