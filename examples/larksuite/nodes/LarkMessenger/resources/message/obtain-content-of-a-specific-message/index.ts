import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain content of a specific message'

const rawOption: INodePropertyOptions = {
  name: 'Obtain content of a specific message',
  value: 'Obtain content of a specific message',
  action: 'Obtain content of a specific message',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
