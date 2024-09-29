import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add A Reaction For A Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Add A Reaction For A Message',
  value: 'Add A Reaction For A Message',
  action: 'Add a reaction for a message',
  description:
    'Adds a reaction of the specified type for a specified message.\r\n\r\nAPI reference documentation: [Add a reaction for a message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
