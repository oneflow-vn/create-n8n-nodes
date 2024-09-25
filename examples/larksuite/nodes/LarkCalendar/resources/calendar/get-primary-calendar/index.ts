import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Get primary calendar'

const rawOption: INodePropertyOptions = {
  name: 'Get primary calendar',
  value: 'Get primary calendar',
  action: 'Get primary calendar',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/calendars/primary',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
