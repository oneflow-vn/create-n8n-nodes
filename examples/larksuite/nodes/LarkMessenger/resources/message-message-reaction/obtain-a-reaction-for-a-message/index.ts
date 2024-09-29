import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain A Reaction For A Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Obtain A Reaction For A Message',
  value: 'Obtain A Reaction For A Message',
  action: 'Obtain a reaction for a message',
  description:
    'Obtains a list of reactions of the specified type for a specified message.\r\n\r\nAPI reference documentation: [Obtain a reaction for a message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/list)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
