import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update group information'

const rawOption: INodePropertyOptions = {
  name: 'Update group information',
  value: 'Update group information',
  action: 'Update group information',
  routing: {
    request: {
      method: 'PUT',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
