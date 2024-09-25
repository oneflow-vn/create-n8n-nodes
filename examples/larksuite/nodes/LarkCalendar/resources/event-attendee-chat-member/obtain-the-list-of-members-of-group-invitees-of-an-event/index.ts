import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain the list of members of group invitees of an event'

const rawOption: INodePropertyOptions = {
  name: 'Obtain the list of members of group invitees of an event',
  value: 'Obtain the list of members of group invitees of an event',
  action: 'Obtain the list of members of group invitees of an event',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees/{{$parameter["attendee_id"]}}/chat_members',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
