import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query the connection status'

const rawOption: INodePropertyOptions = {
  name: 'Query the connection status',
  value: 'Query the connection status',
  action: 'Query the connection status',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/exchange_bindings/{{$parameter["exchange_binding_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
