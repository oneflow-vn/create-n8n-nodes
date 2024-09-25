import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create event invitees'

const rawOption: INodePropertyOptions = {
  name: 'Create event invitees',
  value: 'Create event invitees',
  action: 'Create event invitees\n',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
