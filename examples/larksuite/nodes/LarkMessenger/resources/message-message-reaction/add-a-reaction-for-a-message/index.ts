import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Add a reaction for a message'

const rawOption: INodePropertyOptions = {
  name: 'Add a reaction for a message',
  value: 'Add a reaction for a message',
  action: 'Add a reaction for a message',
  routing: {
    request: {
      method: 'POST',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
