import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Determine whether a user or bot is in a group'

const rawOption: INodePropertyOptions = {
  name: 'Determine whether a user or bot is in a group',
  value: 'Determine whether a user or bot is in a group',
  action: 'Determine whether a user or bot is in a group',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members/is_in_chat',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
