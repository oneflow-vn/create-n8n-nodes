import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query statistical data'

const rawOption: INodePropertyOptions = {
  name: 'Query statistical data',
  value: 'Query statistical data',
  action: 'Query statistical data',
  routing: {
    request: {
      method: 'POST',
      url: '=/attendance/v1/user_stats_datas/query',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
