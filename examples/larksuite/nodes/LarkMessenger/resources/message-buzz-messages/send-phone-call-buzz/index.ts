import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Send phone call buzz'

const rawOption: INodePropertyOptions = {
  name: 'Send phone call buzz',
  value: 'Send phone call buzz',
  action: 'Send phone call buzz',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/im/v1/messages/{{$parameter["message_id"]}}/urgent_phone',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
