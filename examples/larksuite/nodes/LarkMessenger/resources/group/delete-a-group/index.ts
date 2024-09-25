import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a group'

const rawOption: INodePropertyOptions = {
  name: 'Delete a group',
  value: 'Delete a group',
  action: 'Delete a group',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
