import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete event invitees'

const rawOption: INodePropertyOptions = {
  name: 'Delete event invitees',
  value: 'Delete event invitees',
  action: 'Delete event invitees',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees/batch_delete',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
