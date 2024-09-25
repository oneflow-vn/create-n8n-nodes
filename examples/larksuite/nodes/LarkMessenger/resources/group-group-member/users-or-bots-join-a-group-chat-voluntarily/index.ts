import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Users or bots join a group chat voluntarily'

const rawOption: INodePropertyOptions = {
  name: 'Users or bots join a group chat voluntarily',
  value: 'Users or bots join a group chat voluntarily',
  action: 'Users or bots join a group chat voluntarily.',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members/me_join',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
