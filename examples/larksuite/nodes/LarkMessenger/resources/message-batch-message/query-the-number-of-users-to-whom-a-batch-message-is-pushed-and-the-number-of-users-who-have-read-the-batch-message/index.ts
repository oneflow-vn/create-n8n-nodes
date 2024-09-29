import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Query The Number Of Users To Whom A Batch Message Is Pushed And The Number Of Users Who Have Read The Batch Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Query The Number Of Users To Whom A Batch Message Is Pushed And The Number Of Users Who Have Read The Batch Message',
  value:
    'Query The Number Of Users To Whom A Batch Message Is Pushed And The Number Of Users Who Have Read The Batch Message',
  action:
    'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
  description:
    'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message\r\n\r\nAPI reference documentation: [Query the number of users to whom a batch message is pushed and the number of users who have read the batch message]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/read_user)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}/read_user',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
