import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get subscription status'

const rawOption: INodePropertyOptions = {
  name: 'Get subscription status',
  value: 'Get subscription status',
  action: 'Get subscription status',
  routing: {
    request: {
      method: 'GET',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions/{{$parameter["subscription_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
