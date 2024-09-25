import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe to event changes'

const rawOption: INodePropertyOptions = {
  name: 'Subscribe to event changes',
  value: 'Subscribe to event changes',
  action: 'Subscribe to event changes',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/subscription',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
