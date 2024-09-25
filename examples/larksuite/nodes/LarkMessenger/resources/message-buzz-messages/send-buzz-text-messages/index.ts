import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send buzz text messages'

const rawOption: INodePropertyOptions = {
  name: 'Send buzz text messages',
  value: 'Send buzz text messages',
  action: 'Send buzz text messages',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_sms',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
