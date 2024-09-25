import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Reply to messages'

const rawOption: INodePropertyOptions = {
  name: 'Reply to messages',
  value: 'Reply to messages',
  action: 'Reply to messages',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reply',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
