import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send Buzz Messages In Apps'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Send Buzz Messages In Apps',
  value: 'Send Buzz Messages In Apps',
  action: 'Send buzz messages in apps',
  description:
    'Performs in-app buzz on the specified message.\r\n\r\nAPI reference documentation: [Send buzz messages in apps]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/urgent_app)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_app',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
