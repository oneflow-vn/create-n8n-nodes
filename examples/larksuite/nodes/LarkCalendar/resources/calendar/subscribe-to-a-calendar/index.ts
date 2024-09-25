import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Subscribe to a calendar'

const rawOption: INodePropertyOptions = {
  name: 'Subscribe to a calendar',
  value: 'Subscribe to a calendar',
  action: 'Subscribe to a calendar',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/subscribe',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
