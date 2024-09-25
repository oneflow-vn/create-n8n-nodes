import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Delete a user'

const rawOption: INodePropertyOptions = {
  name: 'Delete a user',
  value: 'Delete a user',
  action: 'Delete a user',
  routing: {
    request: {
      method: 'DELETE',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
