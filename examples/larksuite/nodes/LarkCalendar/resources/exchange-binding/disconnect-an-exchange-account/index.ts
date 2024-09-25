import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Disconnect an Exchange account'

const rawOption: INodePropertyOptions = {
  name: 'Disconnect an Exchange account',
  value: 'Disconnect an Exchange account',
  action: 'Disconnect an Exchange account',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/exchange_bindings/{{$parameter["exchange_binding_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
