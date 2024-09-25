import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Recall messages in batches'

const rawOption: INodePropertyOptions = {
  name: 'Recall messages in batches',
  value: 'Recall messages in batches',
  action: 'Recall messages in batches',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
