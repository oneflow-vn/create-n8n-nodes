import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete A Reaction For A Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Delete A Reaction For A Message',
  value: 'Delete A Reaction For A Message',
  action: 'Delete a reaction for a message',
  description:
    'Deletes a reaction for a specified message.\r\n\r\nAPI reference documentation: [Delete a reaction for a message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message-reaction/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions/{{$parameter["reaction_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
