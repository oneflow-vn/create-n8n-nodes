import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Updates group speech scopes'

const rawOption: INodePropertyOptions = {
  name: 'Updates group speech scopes',
  value: 'Updates group speech scopes',
  action: 'Updates group speech scopes',
  routing: {
    request: {
      method: 'PUT',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/moderation',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
