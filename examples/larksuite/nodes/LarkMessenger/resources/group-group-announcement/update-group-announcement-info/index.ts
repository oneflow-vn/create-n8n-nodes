import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update group announcement info'

const rawOption: INodePropertyOptions = {
  name: 'Update group announcement info',
  value: 'Update group announcement info',
  action: 'Update group announcement info',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/announcement',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
