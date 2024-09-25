import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain group announcement information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain group announcement information',
  value: 'Obtain group announcement information',
  action: 'Obtain group announcement information',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/chats/{{$parameter["chat_id"]}}/announcement',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
