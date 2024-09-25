import { INodePropertyOptions } from 'n8n-workflow'
import { properties as rawProperties } from './properties'
import runHooks from './hooks'

export const name = 'Obtain single user information'

const rawOption: INodePropertyOptions = {
  name: 'Obtain single user information',
  value: 'Obtain single user information',
  action: 'Obtain single user information',
  routing: {
    request: {
      method: 'GET',
      url: '=/contact/v3/users/{{$parameter["user_id"]}}',
    },
  },
}

const { properties, option } = runHooks(rawOption, rawProperties)

export { option, properties }
