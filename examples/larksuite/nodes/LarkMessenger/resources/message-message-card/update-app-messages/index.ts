import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update app messages'

const rawOption: INodePropertyOptions = {
  name: 'Update app messages',
  value: 'Update app messages',
  action: 'Update app messages',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
