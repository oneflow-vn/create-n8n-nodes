import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update an event'

const rawOption: INodePropertyOptions = {
  name: 'Update an event',
  value: 'Update an event',
  action: 'Update an event',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
