import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Query a user group'

const rawOption: INodePropertyOptions = {
  name: 'Query a user group',
  value: 'Query a user group',
  action: 'Query a user group',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
