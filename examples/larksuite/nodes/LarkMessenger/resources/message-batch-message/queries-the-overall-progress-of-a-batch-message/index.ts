import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Queries the overall progress of a batch message'

const rawOption: INodePropertyOptions = {
  name: 'Queries the overall progress of a batch message',
  value: 'Queries the overall progress of a batch message',
  action: 'Queries the overall progress of a batch message.',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}/get_progress',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
