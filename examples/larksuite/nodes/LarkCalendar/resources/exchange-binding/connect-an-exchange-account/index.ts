import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Connect an Exchange account'

const rawOption: INodePropertyOptions = {
  name: 'Connect an Exchange account',
  value: 'Connect an Exchange account',
  action: 'Connect an Exchange account',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/exchange_bindings',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
