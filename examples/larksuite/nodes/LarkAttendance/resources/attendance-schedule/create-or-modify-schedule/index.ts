import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Create or modify schedule'

const rawOption: INodePropertyOptions = {
  name: 'Create or modify schedule',
  value: 'Create or modify schedule',
  action: 'Create or modify schedule',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_daily_shifts/batch_create',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
