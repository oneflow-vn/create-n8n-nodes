import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Recall Messages'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Recall Messages',
  value: 'Recall Messages',
  action: 'Recall messages',
  description:
    'The bot recalls messages it sent or the group owner recalls messages within a group.\r\n\r\nAPI reference documentation: [Recall messages]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/message/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
