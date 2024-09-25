import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Search for calendars'

const rawOption: INodePropertyOptions = {
  name: 'Search for calendars',
  value: 'Search for calendars',
  action: 'Search for calendars',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/search',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
