import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query statistics settings'

const rawOption: INodePropertyOptions = {
  name: 'Query statistics settings',
  value: 'Query statistics settings',
  action: 'Query statistics settings',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_views/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
