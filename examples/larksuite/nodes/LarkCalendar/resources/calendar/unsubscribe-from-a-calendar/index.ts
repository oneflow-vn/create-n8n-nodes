import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Unsubscribe from a calendar'

const rawOption: INodePropertyOptions = {
  name: 'Unsubscribe from a calendar',
  value: 'Unsubscribe from a calendar',
  action: 'Unsubscribe from a calendar',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/unsubscribe',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
