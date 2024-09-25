import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update statistics settings'

const rawOption: INodePropertyOptions = {
  name: 'Update statistics settings',
  value: 'Update statistics settings',
  action: 'Update statistics settings',
  routing: {
    request: {
      method: 'PUT',
      url: '=/attendance/v1/user_stats_views/{{$parameter["user_stats_view_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
