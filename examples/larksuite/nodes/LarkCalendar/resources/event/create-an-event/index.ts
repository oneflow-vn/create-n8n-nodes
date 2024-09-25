import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create an event'

const rawOption: INodePropertyOptions = {
  name: 'Create an event',
  value: 'Create an event',
  action: 'Create an event',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
