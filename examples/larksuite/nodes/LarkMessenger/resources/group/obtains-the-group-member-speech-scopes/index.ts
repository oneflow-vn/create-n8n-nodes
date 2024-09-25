import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtains the group member speech scopes'

const rawOption: INodePropertyOptions = {
  name: 'Obtains the group member speech scopes',
  value: 'Obtains the group member speech scopes',
  action: 'Obtains the group member speech scopes',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/moderation',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
