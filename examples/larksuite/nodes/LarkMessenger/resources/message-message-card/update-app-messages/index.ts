import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update App Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Update App Messages',
  value: 'Update App Messages',
  action: 'Update app messages',
  description:
    'Updates the content of message cards sent by an app.\r\n\r\nAPI reference documentation: [Update app messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/patch)',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
