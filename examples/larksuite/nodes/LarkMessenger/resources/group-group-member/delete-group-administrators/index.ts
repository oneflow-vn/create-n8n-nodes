import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete group administrators'

const rawOption: INodePropertyOptions = {
  name: 'Delete group administrators',
  value: 'Delete group administrators',
  action: 'Delete group administrators',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/managers/delete_managers',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
