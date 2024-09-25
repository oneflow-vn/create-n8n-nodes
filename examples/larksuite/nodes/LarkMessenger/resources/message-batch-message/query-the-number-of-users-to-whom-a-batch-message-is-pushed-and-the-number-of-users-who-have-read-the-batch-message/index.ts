import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name =
  'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message'

const rawOption: INodePropertyOptions = {
  name: 'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
  value:
    'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
  action:
    'Query the number of users to whom a batch message is pushed and the number of users who have read the batch message',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/batch_messages/{{$parameter["batch_message_id"]}}/read_user',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
