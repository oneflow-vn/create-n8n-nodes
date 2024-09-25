import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Update user information in whole'

const rawOption: INodePropertyOptions = {
  name: 'Update user information in whole',
  value: 'Update user information in whole',
  action: 'Update user information in whole',
  routing: {
    request: {
      method: 'PUT',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
