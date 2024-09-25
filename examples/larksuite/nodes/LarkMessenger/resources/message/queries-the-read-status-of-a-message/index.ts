import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Queries the read status of a message'

const rawOption: INodePropertyOptions = {
  name: 'Queries the read status of a message',
  value: 'Queries the read status of a message',
  action: 'Queries the read status of a message',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/read_users',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
