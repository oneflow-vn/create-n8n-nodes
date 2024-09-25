import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a reaction for a message'

const rawOption: INodePropertyOptions = {
  name: 'Delete a reaction for a message',
  value: 'Delete a reaction for a message',
  action: 'Delete a reaction for a message',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/reactions/{{$parameter["reaction_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
