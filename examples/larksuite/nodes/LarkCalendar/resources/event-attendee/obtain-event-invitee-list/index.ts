import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain event invitee list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain event invitee list',
  value: 'Obtain event invitee list',
  action: 'Obtain event invitee list',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events/{{$parameter["event_id"]}}/attendees',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
