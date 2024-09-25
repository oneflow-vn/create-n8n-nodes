import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query schedule information'

const rawOption: INodePropertyOptions = {
  name: 'Query schedule information',
  value: 'Query schedule information',
  action: 'Query schedule information',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_daily_shifts/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
