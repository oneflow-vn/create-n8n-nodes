import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update subscription status'

const rawOption: INodePropertyOptions = {
  name: 'Update subscription status',
  value: 'Update subscription status',
  action: 'Update subscription status',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions/{{$parameter["subscription_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
