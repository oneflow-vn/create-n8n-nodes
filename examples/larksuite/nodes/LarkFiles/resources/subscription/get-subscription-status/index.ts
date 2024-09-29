import { INodePropertyOptions } from 'n8n-workflow'

/* eslint-disable */
// @ts-ignore
import * as helpers from '../../../helpers'
/* eslint-disable */

import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get Subscription Status'

/* eslint-disable */
const rawOption: INodePropertyOptions = {
  name: 'Get Subscription Status',
  value: 'Get Subscription Status',
  action: 'Get subscription status',
  description:
    'Get the status of the subscription based on the subscription ID\r\n\r\nAPI reference documentation: [Get subscription status]({{document_base_url}}/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/file-subscription/get)',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions/{{$parameter["subscription_id"]}}',
    },
  },
}
/* eslint-disable */

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
