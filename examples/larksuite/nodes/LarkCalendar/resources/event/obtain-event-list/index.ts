import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain event list'

const rawOption: INodePropertyOptions = {
  name: 'Obtain event list',
  value: 'Obtain event list',
  action: 'Obtain event list',
  routing: {
    request: {
      method: 'GET',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}/events',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
