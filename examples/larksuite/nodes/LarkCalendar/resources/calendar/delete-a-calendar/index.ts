import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a calendar'

const rawOption: INodePropertyOptions = {
  name: 'Delete a calendar',
  value: 'Delete a calendar',
  action: 'Delete a calendar',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
