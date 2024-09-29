import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Queries The Overall Progress Of A Batch Message'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Queries The Overall Progress Of A Batch Message',
  value: 'Queries The Overall Progress Of A Batch Message',
  action: 'Queries the overall progress of a batch message.',
  description:
    'Queries the overall progress of a batch message.\r\n\r\nAPI reference documentation: [Queries the overall progress of a batch message.]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/get_progress)',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}/get_progress',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
