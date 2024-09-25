import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query statistics headers'

const rawOption: INodePropertyOptions = {
  name: 'Query statistics headers',
  value: 'Query statistics headers',
  action: 'Query statistics headers',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_fields/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
