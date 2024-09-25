import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create a leave event'

const rawOption: INodePropertyOptions = {
  name: 'Create a leave event',
  value: 'Create a leave event',
  action: 'Create a leave event',
  routing: {
    request: {
      method: 'POST',
      url: '=/calendar/v4/timeoff_events',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
