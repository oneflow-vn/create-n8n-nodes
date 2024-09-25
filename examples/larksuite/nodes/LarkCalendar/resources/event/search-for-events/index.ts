import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search for events'

const rawOption: INodePropertyOptions = {
  name: 'Search for events',
  value: 'Search for events',
  action: 'Search for events',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
