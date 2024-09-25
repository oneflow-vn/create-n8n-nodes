import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Recall messages'

const rawOption: INodePropertyOptions = {
  name: 'Recall messages',
  value: 'Recall messages',
  action: 'Recall messages',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
