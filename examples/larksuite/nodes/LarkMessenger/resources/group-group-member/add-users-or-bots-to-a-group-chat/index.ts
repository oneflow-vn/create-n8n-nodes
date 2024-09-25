import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add users or bots to a group chat'

const rawOption: INodePropertyOptions = {
  name: 'Add users or bots to a group chat',
  value: 'Add users or bots to a group chat',
  action: 'Add users or bots to a group chat',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
