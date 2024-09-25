import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe to calendar change events'

const rawOption: INodePropertyOptions = {
  name: 'Subscribe to calendar change events',
  value: 'Subscribe to calendar change events',
  action: 'Subscribe to calendar change events',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/subscription',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
