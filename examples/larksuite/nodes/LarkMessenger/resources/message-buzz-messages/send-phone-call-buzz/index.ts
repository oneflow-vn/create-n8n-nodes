import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send Phone Call Buzz'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Send Phone Call Buzz',
  value: 'Send Phone Call Buzz',
  action: 'Send phone call buzz',
  description:
    'Perform in-app and phone call buzz on the specified message\r\n\r\nAPI reference documentation: [Send phone call buzz]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_phone)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_phone',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
