import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain a reaction for a message'

const rawOption: INodePropertyOptions = {
  name: 'Obtain a reaction for a message',
  value: 'Obtain a reaction for a message',
  action: 'Obtain a reaction for a message',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
