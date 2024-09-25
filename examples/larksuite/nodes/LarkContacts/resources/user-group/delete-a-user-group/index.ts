import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a user group'

const rawOption: INodePropertyOptions = {
  name: 'Delete a user group',
  value: 'Delete a user group',
  action: 'Delete a user group',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/group/{{$parameter["group_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
