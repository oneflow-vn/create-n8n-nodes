import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a calendar'

const rawOption: INodePropertyOptions = {
  name: 'Create a calendar',
  value: 'Create a calendar',
  action: 'Create a calendar',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
