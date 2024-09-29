import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Recall Messages In Batches'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Recall Messages In Batches',
  value: 'Recall Messages In Batches',
  action: 'Recall messages in batches',
  description:
    'Recall messages in batches\r\n\r\nAPI reference documentation: [Recall messages in batches]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/im-v1/batch_message/delete)',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
