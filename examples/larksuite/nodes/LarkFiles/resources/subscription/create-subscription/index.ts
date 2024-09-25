import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create Subscription'

const rawOption: INodePropertyOptions = {
  name: 'Create Subscription',
  value: 'Create Subscription',
  action: 'Create Subscription',
  routing: {
    request: {
      method: 'POST',
      url: '=/drive/v1/files/{{$parameter["file_token"]}}/subscriptions',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
