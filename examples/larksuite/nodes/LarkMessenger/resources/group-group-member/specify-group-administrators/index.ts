import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Specify group administrators'

const rawOption: INodePropertyOptions = {
  name: 'Specify group administrators',
  value: 'Specify group administrators',
  action: 'Specify group administrators',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/managers/add_managers',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
