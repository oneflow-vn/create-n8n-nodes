import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send buzz messages in apps'

const rawOption: INodePropertyOptions = {
  name: 'Send buzz messages in apps',
  value: 'Send buzz messages in apps',
  action: 'Send buzz messages in apps',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_app',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
