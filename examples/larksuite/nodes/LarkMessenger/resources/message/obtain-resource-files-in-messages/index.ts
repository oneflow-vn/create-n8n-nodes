import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain resource files in messages'

const rawOption: INodePropertyOptions = {
  name: 'Obtain resource files in messages',
  value: 'Obtain resource files in messages',
  action: 'Obtain resource files in messages',
  routing: {
    request: {
      method: 'GET',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/resources/{{$parameter["file_key"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
