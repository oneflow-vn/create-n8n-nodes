import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Remove users or bots from a group chat'

const rawOption: INodePropertyOptions = {
  name: 'Remove users or bots from a group chat',
  value: 'Remove users or bots from a group chat',
  action: 'Remove users or bots from a group chat',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
