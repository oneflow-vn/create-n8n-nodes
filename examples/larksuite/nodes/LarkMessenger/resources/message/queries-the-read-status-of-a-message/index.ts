import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Queries The Read Status Of A Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Queries The Read Status Of A Message',
  value: 'Queries The Read Status Of A Message',
  action: 'Queries the read status of a message',
  description:
    'Query the read information of the message\r\n\r\nAPI reference documentation: [Queries the read status of a message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/read_users)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/read_users',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
