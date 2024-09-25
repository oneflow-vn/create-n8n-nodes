import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update a user group'

const rawOption: INodePropertyOptions = {
  name: 'Update a user group',
  value: 'Update a user group',
  action: 'Update a user group',
  routing: {
    request: {
      method: 'PATCH',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
