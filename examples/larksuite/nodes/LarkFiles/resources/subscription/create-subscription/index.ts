import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Subscription'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Create Subscription',
  value: 'Create Subscription',
  action: 'Create Subscription',
  description:
    'Subscribe to change events in the document, currently supporting document comment subscriptions\r\n\r\nAPI reference documentation: [Create Subscription]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-subscription/create)',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
