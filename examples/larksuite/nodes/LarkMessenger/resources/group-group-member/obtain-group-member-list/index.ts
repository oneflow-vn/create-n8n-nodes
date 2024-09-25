import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain group member list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain group member list',
  value: 'Obtain group member list',
  action: 'Obtain group member list',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
