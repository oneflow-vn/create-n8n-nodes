import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a calendar'

const rawOption: INodePropertyOptions = {
  name: 'Update a calendar',
  value: 'Update a calendar',
  action: 'Update a calendar',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/calendar/v4/calendars/{{$parameter["calendar_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
